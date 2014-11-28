'use strict';

angular.module('contactApp')
  .controller('CreateCtrl', function($scope, $location, Contacts) {
      //$scope.contact=Contacts;
      // console.log($scope.contact.name);
      $scope.contact = Contacts;
      $scope.savename = function(){
  		$scope.contact.push($scope.contact);
		// }
  //     $scope.savename = function(){
  //             console.log($scope.contact.name);
  //     Contacts.$add($scope.contact).then(function(data) {
          $location.path('/');
      };
  // };
});
 