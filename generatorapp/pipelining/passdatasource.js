var redis = require('redis');
var importsourceModel = require('../../datamillserver/datasource/importdataSchema');
var client = redis.createClient();

function passdatasource(sourcename, email) {
    //console.log("inside passdatasource");
    importsourceModel.find({ sourcename: sourcename, email: email }, function(err, docs) {
        if (err) {
            console.log("error in passdatasource in fetching data from datasource");
            console.log(err)
        } else {
            //console.log("success callback from passdatasource");
            var data = docs[0].data;
            for (i = 0; i < 500; i++) {
                var randomvalue = Math.floor(Math.random() * (data.length));
                var keys=Object.keys(data[0])
                client.lpush(sourcename+"_"+email, data[randomvalue][keys[0]]);
            }
        }
    });
}
module.exports = {
    passdatasource: passdatasource,
    client: client
};