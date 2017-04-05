app.service('shopService', function($http){
  var baseUrl = 'https://practiceapi.devmounta.in/products'
  this.getProducts = function(){
    var promise = $http({
      method: 'GET',
      url: baseUrl
    })
    return promise.then(function(response){
      return response.data;
    })
  }
})
