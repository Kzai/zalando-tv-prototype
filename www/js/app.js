
angular.module('ztv', ['ionic', 'ztv.Controllers'])


    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
      .state('welcome', {
              url: '/',
              templateUrl: 'templates/welcome.html'
      })
      .state('slideForm', {
              url: '/slideform',
              templateUrl: 'templates/slideform.html',
              controller: 'SlideFormCtrl'
      })
     .state('main', {
        url: "/main",
        templateUrl: 'templates/main.html',
              controller: 'MainCtrl'
      });

      $urlRouterProvider.otherwise('/');

    })

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true)
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
