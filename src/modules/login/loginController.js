deliveryApp.controller('loginCtrl', ['$scope', '$http', '$state','loginService', function($scope, $http, $state, loginService) {
    console.log('hello world from index controller');
    
    $scope.user = {};
    
    //login function to authenticate the user
    $scope.login = function() {
        console.log('inside login..'+ $scope.user);
        loginService.getUserCredentials($scope.user)
            .then(function(data) {
                console.log('data', data.data);
                angular.forEach(data.data, function(value, key){
                   console.log('value: ', value.userName);
                   console.log('key: ', key);
                    if(value.userName===$scope.user.name && value.password===$scope.user.password) {
                        console.log('user found...');
                        $scope.validUser = true;
                        $state.go('reportee.blockers');
                    }else {
                        console.log('user not found');
                        $scope.errorLogin = true;
                        $state.go('login');
                    }
                });
            })
            .catch(function(error) {
            //promise rejected..
            console.log('error during fetch..');
            })
            .finally(function() {
            //call finally.
            console.log('call finally..');
            });
    };
}]);