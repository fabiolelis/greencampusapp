// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('species', ['ionic'])

.controller('speciesCtrl', function($scope,$http) {
    $scope.data = {};
    //var address = "http://lelis2008.cloudapp.net/greencampusadmin/www/services/species.php";
    var address = "http://localhost/gcadmin/www/services/species.php";

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

    $scope.species;
    $scope.getSpecies = function(){

        $http({
              method : 'GET',
              url : address + '?id=' + speciesId,
              headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

              }).success(function(res){
                  var obj = res.species;
                  $scope.species = obj;
                  $scope.buildHtml();

              }).error(function(error){
                  $scope.res = error;
        });

    };
    $scope.getSpecies();
   
    $scope.htmlcharacsteristics = [];
    $scope.buildHtml = function() {
       
      for(var i in $scope.species.characteristics){

        var charac = $scope.species.characteristics[i];
        var str = "<div>";

        str += charac.id;
        str += "</div>";
        $scope.htmlcharacsteristics.push(str);
      }


    };

     $scope.orderCharacs = function() {
       
      for(var i in $scope.species.characteristics){

        var charac = $scope.species.characteristics[i];
        var str = "<div>";

        str += charac.id;
        str += "</div>";
        $scope.htmlcharacsteristics.push(str);
      }


    };
    
    $scope.goToIndex = function() {
        window.location.href = 'index.html';
    };
    

});