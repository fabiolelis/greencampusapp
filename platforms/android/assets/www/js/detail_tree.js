// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('tree', ['ionic'])

.controller('treeCtrl', function($scope,$http) {
    $scope.data = {};
    var address = "http://lelis2008.cloudapp.net/greencampusadmin/www/services/tree.php";
    //var address = "http://localhost/gcadmin/www/services/tree.php";

    var speciesId = 0;
    var url = window.location.href;
    url = url.split("?");
    if(url.length > 0){
      url = url[1].split("&");
      for(var i =0; i < url.length; i++){
        url = url[i].split("=");
        if(url != null && url[0] == "id"){
            speciesId = url[1];
        }
      }
    }

    $scope.tree = null;
    $scope.getSpecies = function(){

        $scope.loading = true;
        $scope.connError = false;

        $http({
              method : 'GET',
              url : address + '?id=' + speciesId,
              headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

              }).success(function(res){
                  var obj = res.tree;
                  $scope.tree = obj;
                  $scope.loading = false;

              }).error(function(error){
                  $scope.res = error;
                  $scope.connError = true;
                  $scope.loading = false;
        });

    };
    $scope.getSpecies();
   
    $scope.goToSpecies = function() {
        window.location.href = 'detail_species.html?id='+$scope.tree.speciesid;
    };
    $scope.goToIndex = function() {
      window.location.href = 'index.html';
    };
    

});