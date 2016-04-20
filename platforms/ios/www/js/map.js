angular.module('map', ['ionic'])

    .controller('MapCtrl', function($scope, $ionicLoading, $compile, $http) {

      function initialize() {

        $scope.loading = true;
        $scope.connError = false;
        
        var myLatlng = new google.maps.LatLng(53.552879, -9.947323);
        
        $scope.trees = [];
        
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.TERRAIN
        };
        $scope.map = new google.maps.Map(document.getElementById("map"),
            mapOptions);

        $scope.map.setOptions({draggable: true, zoomControl: true, scrollwheel: true, disableDoubleClickZoom: false, streetViewControl:false});
        
        $scope.getTrees();
      }

      ionic.Platform.ready(initialize);      

      $scope.buildMarkers = function(){

        markers = Array();
        infoWindows = Array();

        //I don't have any idea how I figured it out. It was just a feeling, I'm just too good.
        var strIcon = "http:/lelis2008.cloudapp.net/greencampusadmin/www/assets/images/trees/tree_icon.png";
        if(ionic.Platform.isAndroid()){
            strIcon = "img/tree_icon.png";
        }


        for(var i in $scope.trees)
        {
            var location = new google.maps.LatLng($scope.trees[i].latitude, $scope.trees[i].longitude);
            var marker = new google.maps.Marker({
                position : location,
                map : $scope.map,
                icon: strIcon,

                infoWindowIndex : i 
            });

            //ionic.Platform.isAndroid();

            //var id = $scope.trees[i].id;
            var content = "<div style='width:200px;'>" +
                        "<h4 style=\"color:green;\">"+ $scope.trees[i].identifier + "</h4>"+
                        "<p>Age: "+ $scope.trees[i].age +"</p>" + 
                        "<p>Latitude: "+ $scope.trees[i].latitude +"</p>" + 
                        "<p>Longitude: "+ $scope.trees[i].longitude +"</p>" + 
                        "<img src= \""+ $scope.trees[i].mainimage +"\" style=\"width:180px;height:100px;\">" +
                        "<a href='detail_tree.html?id="+$scope.trees[i].id+"'><button class=\"btn btn-primary\" "+
                        " style=\"margin-top:5px;width:180px\" >" +
                        " See details  </button></a>"+
                        "</div>";

            var infoWindow = new google.maps.InfoWindow({
                content : content
            });

            google.maps.event.addListener(marker, 'click', 
                function(event)
                {
                    //map.panTo(event.latLng);
                    //map.setZoom(5);
                    for(var innerI in $scope.trees)
                        infoWindows[innerI].close();

                    infoWindows[this.infoWindowIndex].open($scope.map, this);
                }
            );

            infoWindows.push(infoWindow);
            markers.push(marker);
            
        }
      };

      $scope.getTrees = function(){

        var address = "http://lelis2008.cloudapp.net/greencampusadmin/www/services/tree.php";
        //var address = "http://localhost/gcadmin/www/services/tree.php";

        $http({
              method : 'GET',
              url : address,
              headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

              }).success(function(res){
                  $scope.trees = res.Trees;
                  $scope.buildMarkers();
                  $scope.loading = false;
                  $scope.connError = false;


              }).error(function(error){
                  $scope.trees = error;
                  $scope.connError = true;
                  $scope.loading = false;
        });
      };
         

      $scope.goToTreeDetail = function(id) {
        window.location.href = 'detail_tree.html?id='+id;
      };

      $scope.goToIndex = function() {
        window.location.href = 'index.html';
      };
      
      
    });