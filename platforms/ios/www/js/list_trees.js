angular.module('treesList', ['ionic'])

.controller('treesListCtrl', function($scope, $http) {
    $scope.data = {};
    var address = "http://lelis2008.cloudapp.net/greencampusadmin/www/services/tree.php";
    //var address = "http://localhost/gcadmin/www/services/tree.php";

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