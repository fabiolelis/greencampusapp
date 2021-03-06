angular.module('speciesList', ['ionic'])

.controller('speciesListCtrl', function($scope, $http) {
    $scope.data = {};
    
    var address = "http://lelis2008.cloudapp.net/greencampusadmin/www/services/species.php";
    //var address = "http://localhost/gcadmin/www/services/species.php";

    $scope.species = [];
    $scope.getSpecies = function(){

        $scope.loading = true;
        $scope.connError = false;
        
        $http({
              method : 'GET',
              url : address,
              headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

              }).success(function(res){
                  $scope.species = res.Species;
                  $scope.loading = false;

              }).error(function(error){
                  $scope.species = error;
                  $scope.connError = true;
                  $scope.loading = false;
        });

    };

    $scope.getSpecies();

    $scope.goToIndex = function() {
      window.location.href = 'index.html';
    };
 

});