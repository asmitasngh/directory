'use strict';

angular.module('contactApp')
    .controller('EditCtrl',function($scope, $location, $routeParams, Contacts) {
        alert($routeParams);
        var contactId = $routeParams.contactId,contactIndex;     
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
