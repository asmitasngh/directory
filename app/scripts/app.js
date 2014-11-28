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
  .module('contactApp', ['ngRoute'])
  .config(function ($routeProvider) {
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
      });
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
 
.controller('EditCtrl',
  function($scope, $location, $routeParams, Contacts) {
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
