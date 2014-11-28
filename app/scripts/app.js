

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
    }])
  .factory('Contacts', function() {
    var Contacts = {};
    Contacts = [ 
      {
        name: "Tina Benko",
        contact_no: "991988980",
        address: "NASA Scientist,abc,aaaa",
        contactId:"1"
      },
      {
        name: "Asmita",
        contact_no: "991988980",
        address: "NASA Scientist,abc,aaaa",
        contactId: "2"
      }
    ];
    return Contacts;
});
    