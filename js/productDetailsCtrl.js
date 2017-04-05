app.controller('productDetailsCtrl', function($scope, shopService, $stateParams){
  $scope.getIds = function(){
    var promise = shopService.getProducts();
    promise.then(function(response){
      $scope.ids = response.id
    })
  }
})
