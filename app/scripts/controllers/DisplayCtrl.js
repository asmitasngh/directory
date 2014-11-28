 
'use strict';

angular.module('contactApp')
 	.controller('DisplayCtrl',function($scope,Contacts){
   	 $scope.contacts = Contacts;
  	});
