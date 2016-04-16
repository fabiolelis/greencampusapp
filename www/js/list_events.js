angular.module('eventsList', ['ionic'])

.controller('eventsListCtrl', function($scope, $http) {
    $scope.data = {};
    //var address = "http://lelis2008.cloudapp.net/greencampusadmin/www/services/event.php";

    var address = "http://localhost/gcadmin/www/services/event.php";

    $scope.events = [];
    $scope.getEvents = function(){

        $http({
              method : 'GET',
              url : address,
              headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

              }).success(function(res){
                  $scope.events = res.Events;

              }).error(function(error){
                  $scope.events = error;
        });

    };

    $scope.getEvents();
 

});