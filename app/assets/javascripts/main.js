//= require_self
//= require_tree ./controllers/main
//= require_tree ./filters/main
//= require_tree ./directives/main
//= require_tree ./services/main

// Name space ProductsApp - dependency is ngRoute
var ProductsApp = angular.module('ProductsApp', ['ngRoute']);

ProductsApp.config(['$routeProvider', function($routeProvider){
  // Route for '#/product'
  $routeProvider.when('/product/:productId', {
    templateUrl: '../assets/mainProduct.html',
    controller: 'ProductCtrl'
  });

  // default route
 $routeProvider.otherwise({
    templateUrl: '../assets/mainIndex.html',  // after controller, this template
    controller: 'IndexCtrl'   // invoke this controller
  });
}]);

