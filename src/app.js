// app.js
var deliveryApp = angular.module('deliveryTracker', ['ui.router','ngAnimate', 'ngSanitize', 'ui.bootstrap']);

deliveryApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/login');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        
        .state('login', {
            url: '/login',
            templateUrl: 'modules/login/login.html'
        })
        .state('reportee', {
            url: '/reportee',
            templateUrl: 'modules/reportee/reportee-view.html'
        })
        .state('reportee.newtask', {//nested state [products is the nested state of business state]
            url: "/newtask",
            templateUrl: "modules/reportee/partial-newtask-reportee.html"
            
        })
        .state('reportee.blockers', {//nested state [services is the nested state of business state]
            url: "/blockers",
            templateUrl: "modules/reportee/blockers.html"
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        });
        
});