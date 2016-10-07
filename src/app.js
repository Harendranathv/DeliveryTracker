// app.js
var deliveryApp = angular.module('deliveryTracker', ['ui.router']);

deliveryApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/reportee');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('reportee', {
            url: '/reportee',
            templateUrl: 'modules/reportee/reportee-view.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        });
        
});