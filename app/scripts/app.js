

/**
 * @ngdoc overview
 * @name contactApp
 * @description
 * # contactApp
 *
 * Main module of the application.
 */
angular
  .module('contactApp', ['ngRoute'] )
  .config(['$routeProvider',function($routeProvider){
    $routeProvider
      .when('/', {        
        controller: 'DisplayCtrl',
        templateUrl: 'views/display.html'        
      })
      .when('/new', {
        templateUrl: 'views/form.html',
        controller: 'CreateCtrl'
      })
      .when('/edit/:contactId',{
        templateUrl: 'views/form.html',
        controller: 'EditCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
    }]);
