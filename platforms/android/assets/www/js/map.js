angular.module('map', ['ionic'])

    .controller('MapCtrl', function($scope, $ionicLoading, $compile) {
      //$scope.init = function() {
      function initialize() {
        
        var myLatlng = new google.maps.LatLng(53.552879, -9.947323);
        
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.TERRAIN
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);

        map.setOptions({draggable: false, zoomControl: false, scrollwheel: false, disableDoubleClickZoom: true, streetViewControl:false});
/*        
        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });
*/

        $scope.map = map;
      }
      //google.maps.event.addDomListener(window, 'load', init);
      ionic.Platform.ready(initialize);
      /*
      $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
        }

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });


      };
      
      $scope.clickTest = function() {
        alert('Example of infowindow with ng-click')
      };

      $scope.goToIndex = function() {
        //window.location.href = 'index.html';
      };*/
      
    });