angular.module('eventsList', ['ionic'])

.controller('eventsListCtrl', function($scope, $http) {
    $scope.data = {};
    
    var address = "http://lelis2008.cloudapp.net/greencampusadmin/www/services/event.php";
    //var address = "http://localhost/gcadmin/www/services/event.php";

    $scope.events = [];
    $scope.getEvents = function(){

        $scope.loading = true;
        $scope.connError = false;

        $http({
              method : 'GET',
              url : address,
              headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

              }).success(function(res){
                  $scope.events = res.Events;
                  $scope.loading = false;
                  for(var i =0; i < $scope.events.length; i++){
                    var images = $scope.events[i].imagesweburl;
                    var arrayImages = images.split(";");

                    $scope.events[i].imagesweburl = arrayImages[0];
                  }

              }).error(function(error){
                  $scope.events = error;
                  $scope.connError = true;
                  $scope.loading = false;
        });

    };

    $scope.getEvents();
 

});