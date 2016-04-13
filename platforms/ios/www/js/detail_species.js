// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('species', ['ionic'])

.controller('speciesCtrl', function($scope, $http) {
    $scope.data = {};
//    var address = "http://lelis2008.cloudapp.net/greencampusadmin/www/service.php";
    var address = "http://localhost/gcadmin/www/service.php";

    $scope.getSpecies = function(){

        $http({
              method : 'GET',
              url : address + '?load=species&id=1',
              headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

              }).success(function(res){
                  var obj = res.species;
                  var strRes = obj.name;
                  strRes += "\n" + obj.latinname;
                  strRes += "\n" + obj.irishname;
                  strRes += "\n" + obj.description;
                  $scope.res = strRes;

              }).error(function(error){
                  $scope.res = error;
        });

    };

   
    $scope.goToIndex = function() {
        window.location.href = 'index.html';
    };
    

});