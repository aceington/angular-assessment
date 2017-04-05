var app = angular.module('assessment', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.when('', '/home')

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'views/home.html',
  })
  .state('about', {
    url: '/about',
    templateUrl: 'views/about.html',
  })
  .state('blog', {
    url: '/blog',
    templateUrl: 'views/blog.html',
  })
  .state('shop', {
    url: '/shop',
    templateUrl: 'views/shop.html',
    controller: 'shopCtrl'
  })
  .state('products', {
    url: '/products/:id',
    templateUrl: 'views/product-details.html',
    controller: 'productDetailsCtrl'
  })


})
