angular.module('datamill')
  .controller('datafeedCtrl', datafeedCtrl);

function datafeedCtrl($timeout, $q, $log, $filter, datafeedService, $scope, $mdDialog, options) {
  var ctrl = this;
  $scope.datafeed = options;
  $scope.pattern = "Pattern Matches";
  datafeedService.getTransportType().then(function(res) {
    ctrl.states = res;
    console.log(ctrl.states);
  });
  ctrl.color = {
    blue: Math.floor(Math.random() * 200)
  };
  ctrl.simulateQuery = false;
  ctrl.isDisabled = false;
  ctrl.rating1 = 50;
  ctrl.querySearch = querySearch;
  ctrl.selectedItemChange = selectedItemChange;
  ctrl.searchTextChange = searchTextChange;
  $scope.saveOption = function(answer) {
    $log.info(answer);
    $mdDialog.hide(answer);
  };
  $scope.cancelOption = function() {
    $mdDialog.cancel();
  }

  function querySearch(query) {
    var results = query ? ctrl.states.filter(createFilterFor(query)) : ctrl.states,
      deferred;
    if (ctrl.simulateQuery) {
      deferred = $q.defer();
      $timeout(function() { deferred.resolve(results); }, Math.random() * 1000, false);
      return deferred.promise;
    } else {
      return results;
    }
  }

  function createFilterFor(query) {
    var lowercaseQuery = angular.lowercase(query);

    return function filterFn(state) {
      return (state.value.indexOf(lowercaseQuery) === 0);
    };

  }

  function searchTextChange(text) {
    $log.info('Text changed to ' + text);
  }

  function selectedItemChange(item) {
    $log.info('Item changed to ' + JSON.stringify(item));
  }
  $log.info("datafeedCtrl is registered");
}