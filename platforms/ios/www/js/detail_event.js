// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('tree', ['ionic'])

.controller('treeCtrl', function($scope,$http) {
    $scope.data = {};
    //var address = "http://lelis2008.cloudapp.net/greencampusadmin/www/services/event.php";
    var address = "http://localhost/gcadmin/www/services/event.php";

    $scope.event = null;
    $scope.videocode = "";
    $scope.images = Array();

    var eventID = 0;
    var url = window.location.href;
    url = url.split("?");
    if(url.length > 0){
      url = url[1].split("&");
      for(var i =0; i < url.length; i++){
        url = url[i].split("=");
        if(url != null && url[0] == "id"){
            eventID = url[1];
        }
      }
    }


    $scope.getEvents = function(){

        $scope.loading = true;
        $scope.connError = false;

        $http({
              method : 'GET',
              url : address + '?id=' + eventID,
              headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

              }).success(function(res){
                  var obj = res.event;
                  $scope.event = obj;

                  //$scope.event.imagesweburl = "http://lelis2008.cloudapp.net/greencampusadmin/www//assets/images/events/phpJtWcAl9008.jpg;" +
                  //"http://localhost/gcadmin/www/assets/images/partners/cnw.JPG;";

                  $scope.code = $scope.getVideoCode($scope.event.videos);
                  $scope.images = $scope.event.imagesweburl.split(';');

                  $scope.loading = false;
                  $scope.connError = false;

              }).error(function(error){
                  $scope.res = error;
                  $scope.connError = true;
                  $scope.loading = false;
        });

    };
    $scope.getEvents();

/*
    $scope.mySplit = function(string, nb) {
      var array = string.split(';');
      return array[nb];
    }
    */
   
    $scope.goToIndex = function() {
        window.location.href = 'index.html';
    };

    $scope.getVideoCode = function(){

      var videocode = 0;
      url = $scope.event.videos;
      url = url.split("?");
      if(url.length > 0){
        url = url[1].split("&");
        for(var i =0; i < url.length; i++){
          url = url[i].split("=");
          if(url != null && url[0] == "v"){
              videocode = url[1];
          }
        }
      }
      return videocode;
    }

    

})
.directive('myYoutube', function($sce) {
  return {
    restrict: 'EA',
    scope: { code:'=' },
    replace: true,
    template: '<div style="height:400px;"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
    link: function (scope) {
        console.log('here');
        scope.$watch('code', function (newVal) {
           if (newVal) {
               scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + scope.code);
           }
        });
    }
  }
});

