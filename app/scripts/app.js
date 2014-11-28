'use strict';

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
        templateUrl: 'display.html'        
      })
      .when('/new', {
        templateUrl: 'form.html',
        controller: 'CreateCtrl'
      })
      .when('/edit/:contactId',{
        templateUrl: 'form.html',
        controller: 'EditCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
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
})
  .controller('DisplayCtrl',function($scope,Contacts){
    $scope.contacts = Contacts;
  })
  .controller('CreateCtrl', function($scope, $location, Contacts) {
      $scope.save = function() {
      Contacts.$add($scope.contact).then(function(data) {
          $location.path('/');
      });
  };
})
 
.controller('EditCtrl',function($scope, $location, $routeParams, Contacts) {
        alert($routeParams);
    var contactId = $routeParams.contactId,
        contactIndex;
 
    $scope.contacts = Contacts;
    contactIndex = $scope.contacts.$indexFor(contactId);
    $scope.contact = $scope.contacts[contactIndex];
 
    $scope.destroy = function() {
        $scope.contacts.$remove($scope.contact).then(function(data) {
            $location.path('/');
        });
    };
 
    $scope.save = function() {
        $scope.contacts.$save($scope.contact).then(function(data) {
           $location.path('/');
        });
    };
});
