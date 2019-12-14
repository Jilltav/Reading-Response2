   //map option//

   function initMap(){
    var options = {
        zoom: 17,
        center: {lat: 43.6529975, lng: -79.3934053}



    }

    //new map//
   var map = new
       google.maps.Map(document.getElementById('map'), options);

       //marker

       var marker = new google.map.Marker({
        position:{lat:43.6529975, lng: -79.3934053},
        map: map,
       })
   }

  