 alert("hi");
'use strict';

angular
  .module('contactApp')
 	.controller('DisplayCtrl',function($scope,Contacts){
 	  console.log(Contacts);
   	 $scope.contacts = Contacts;
    // .controller('DisplayCtrl', ['$scope', function($scope) {
    // $scope.contact = [];
  	});
