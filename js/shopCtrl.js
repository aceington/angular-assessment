app.controller('shopCtrl', function($scope, shopService){
  $scope.getProducts = function(){
    var promise = shopService.getProducts();
    promise.then(function(response){
      $scope.products = response;
    })
  }
  $scope.getProducts();

  
})
