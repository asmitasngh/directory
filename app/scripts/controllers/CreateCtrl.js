'use strict';

angular.module('contactApp')
  .controller('CreateCtrl', function($scope, $location, Contacts) {
      //$scope.contact=Contacts;
      // console.log($scope.contact.name);
      $scope.savename = function(){
              console.log($scope.contact.name);
      Contacts.$add($scope.contact).then(function(data) {
          $location.path('/');
      });
  };
});
 