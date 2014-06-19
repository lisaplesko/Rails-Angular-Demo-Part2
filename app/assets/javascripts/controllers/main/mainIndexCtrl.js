// Create an index controller
// $location sets the url in the address bar - where you've been, etc.
var IndexCtrl = function($scope, $location) {
  /// Create a set of products
  $scope.products = [
    {name: "Black Boot", description: "We will crush you", price: 149.99},
    {name: "Television", description: "52 in", price: 599.00},
    {name: "Fishcake", description: "Fish in a cake", price: 15.00},
    {name: "USB Plug", description: "For your phone", price: 11.99}
  ];
  $scope.viewProduct = function(){
    $location.url('/product');
  };
};
