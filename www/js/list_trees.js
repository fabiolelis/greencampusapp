// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('treesList', ['ionic'])

.controller('treesListCtrl', function($scope, $http) {
    $scope.data = {};
    //var address = "http://lelis2008.cloudapp.net/greencampusadmin/www/services/tree.php";

    var address = "http://localhost/gcadmin/www/services/tree.php";

    $scope.trees = [];
    $scope.getTrees = function(){

        $http({
              method : 'GET',
              url : address,
              headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

              }).success(function(res){
                  $scope.trees = res.Trees;

              }).error(function(error){
                  $scope.trees = error;
        });

    };

    $scope.getTrees();
 

});