deliveryApp.service('loginService',function($http) {
    
    //get user credetials from the db
    this.getUserCredentials = function(loginCredentials) {
    
        var uname       = loginCredentials.name;
        var upassword   = loginCredentials.password;
        console.log('inside service of login'+ loginCredentials);
        
        var url = '/users';
        return $http.get(url);
    };
});