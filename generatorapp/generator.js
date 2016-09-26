var ticker = require('./timeticker/timeticker');
var highland = require('highland')
var pipeliner = require('./pipelining/attrpipeline')
var consumepipeliner = require('./pipelining/consumepipeline')
var globalactivedatasources = require('../generatorloops/activedatasrc')

function startGeneration(datamodel, cb) {
  tickerObj = getTicker(datamodel)
  generatorFunc = getGeneratorFunc(datamodel, tickerObj);
  console.log("now to ", (new Date()));
  console.log("the ticker obj is:", tickerObj)
  globalactivedatasources.registerDataSource(datamodel.attributes);
  genPipeline = pipeliner.attrPipeline(datamodel.attributes);
  consumePipeline = consumepipeliner.consumePipeline(datamodel)
  process.nextTick(function() {
    highland(generatorFunc).pipe(genPipeline).pipe(consumePipeline).each(function(data) {
      //console.log("done", data);
      if (cb) cb(data);
    })
  })
}

// generate a ticker object
function getTicker(datamodel) {
  var mode = 'burst';
  var interval = 0;
  var end = null;
  var unit = {
    "mm": 60000,
    "ss": 1000,
    "hh": 3600000,
  }
  if (datamodel.delivery == "download") {
    interval = 1;
  } else if (datamodel.delivery == 'feed') {
    end = new Date(datamodel['datafeed']['end']);
    if (datamodel['datafeed']['flow']['type'] == 'sporadic') {
      interval = datamodel['datafeed']['flow']['bursts']['occurrences'];
    } else if (datamodel['datafeed']['flow']['type'] == 'continuous') {
      mode = 'continuous';
      interval = datamodel['datafeed']['flow']['frequency']['time'] * unit[datamodel['datafeed']['flow']['frequency']['unit']];
    }
  }
  return new ticker(datamodel.name + "_" + datamodel.email, null, end, mode, interval)
}
// generate a generator function for highland
function getGeneratorFunc(datamodel, tickerObj) {
  var packets = undefined;
  if (datamodel.delivery == "download") {
    packets = datamodel["download"]["packets"]
  } else if (datamodel.delivery == 'feed') {
    if (datamodel['datafeed']['flow']['type'] == 'sporadic') {
      packets = datamodel['datafeed']['flow']['bursts']['totalpackets'] / datamodel['datafeed']['flow']['bursts']['occurrences'];
    } else if (datamodel['datafeed']['flow']['type'] == 'continuous') {
      packets = datamodel['datafeed']['flow']['frequency']['packets'];
    }
  }

  return function(push, next) {
    tickerObj.start(function() {
      for (var i = 0; i < packets; i++) {
        push(null, {});
      }
      if (datamodel.delivery == 'download') {
        console.log("this is download type")
        push(null, null)
        push(null, highland.nil)
      }
    }, function() {
      globalactivedatasources.unregisterDataSource(datamodel.attributes);
    })
  }
}

module.exports = {
  startGeneration: startGeneration
}
