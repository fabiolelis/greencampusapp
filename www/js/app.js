// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('starter', ['ionic','ui.bootstrap'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.controller('AppCtrl', function($scope, $http) {
    $scope.data = {};
    var address = "http://lelis2008.cloudapp.net/greencampusadmin/www/service.php";//"172.16.107.116";//10.12.12.26

    $scope.postTree = function(){

        var obj = {
              "name": $scope.data.name,//"tttt",
              "age": $scope.data.age
        };

        var postData = 'tree='+JSON.stringify(obj);
        $http({
              method : 'POST',
              url : address,
              data: postData,
              headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

              }).success(function(res){
                  $scope.res = res;

              }).error(function(error){
                $scope.res = error;
        });

    };

    $scope.getTree = function(){
       
        $http({
              method : 'GET',
              url : address + '?load=tree&id='+$scope.data.idQuery,
              headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

              }).success(function(res){
                  $scope.res = res;

              }).error(function(error){
                  $scope.res = error;
        });

    };

    $scope.getAllTrees = function(){


        $http({
              method : 'GET',
              url : address + '?load=tree',
              headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

              }).success(function(res){
                  $scope.res = res;

              }).error(function(error){
                $scope.res = error;
        });

    };



    $scope.goToMap = function() {
      window.location.href = 'map.html';
    };
    $scope.goToListTrees = function() {
      window.location.href = 'listtrees.html';
    };
    $scope.goToDetailSpecies = function() {
      window.location.href = 'detail_species.html';
    };
    

});
//angular.module('starter', ['ui.bootstrap']);
