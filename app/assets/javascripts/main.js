//= require_self
//= require_tree ./controllers/main
//= require_tree ./filters/main
//= require_tree ./directives/main
//= require_tree ./services/main

// Name space ProductsApp - dependency is ngRoute
var ProductsApp = angular.module('ProductsApp', ['ngRoute']);

ProductsApp.config(['$routeProvider', function($routeProvider){
    // default route
   $routeProvider.otherwise({
    templateUrl: '../assets/mainIndex.html',  // after controller, this template
    controller: 'IndexCtrl'   // invoke this controller
    });
}]);

