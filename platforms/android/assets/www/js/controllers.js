angular.module('IndexCrtl.controllers', [])

.controller('IndexCrtl', function ($scope, $location, $state, $window, Post, Auth) {
    $scope.goToMap = function() {
      $window.location.href = '/map.html';
    };
    $scope.goToAng = function() {
      $window.location.href = '/ang.html';
    };
});

