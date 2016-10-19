deliveryApp.controller('ModalDemoCtrl', function($scope, $uibModal, $log, $document, $http) {

    $scope.content = null;
    $scope.moduleState = 'showTaskList'; 
    $scope.isVisible = false;
    $http.get('modules/reportee/blocker_data.json').
    success(function(data, status, headers, config) {
        $scope.contents = data;
    }).error(function(data, status, headers, config) {});

    //Contains the filter options
    $scope.filterOptions = {
        stores: [{
            name: 'All Tasks',
            value: "NA"
        }, {
            name: 'Blocked',
            value: "yes"
        }, {
            name: 'Non-blocked',
            value: "no"
        }]
    };

    //Mapped to the model to filter
    $scope.filterItem = {
        store: $scope.filterOptions.stores[0]
    };

    //Custom filter - filter based on the rating selected
    $scope.customFilter = function(contents) {
        if (contents.Blocker === $scope.filterItem.store.value) {
            return true;
        } else if ($scope.filterItem.store.value === "NA") {
            return true;
        } else {
            return false;
        }
    };


    $scope.showTaskList = function(task_id) {
        $scope.moduleState = 'showTaskList';
        $scope.isVisible = false;
    };

    $scope.showTaskDetails = function() {
        $scope.moduleState = 'showTaskDetails';
        $scope.isVisible = true;
    };
    
    /* $ctrl.items = ['item1', 'item2', 'item3'];

     $ctrl.animationsEnabled = true;

     $ctrl.open = function (size, parentSelector) {
       var parentElem = parentSelector ? 
         angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
       var modalInstance = $uibModal.open({
         animation: $ctrl.animationsEnabled,
         ariaLabelledBy: 'modal-title',
         ariaDescribedBy: 'modal-body',
         templateUrl: 'myModalContent.html',
         controller: 'ModalInstanceCtrl',
         controllerAs: '$ctrl',
         size: size,
         appendTo: parentElem,
         resolve: {
           items: function () {
             return $ctrl.items;
           }
         }
       });

       modalInstance.result.then(function (selectedItem) {
       }, function () {
         $log.info('Modal dismissed at: ' + new Date());
       });
     };*/
});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

/*deliveryApp.controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
  var $ctrl = this;

  $ctrl.ok = function () {
    //$uibModalInstance.close($ctrl.selected.item);
  };
  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});*/
// Please note that the close and dismiss bindings are from $uibModalInstance.