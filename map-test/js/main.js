   //map option//

   function initMap(){
    var options = {
        zoom: 17,
        center: {lat: 43.6576588, lng: -79.3932006}



    }

    //new map//
   var map = new
       google.maps.Map(document.getElementById('map'), options);

       //marker

       var marker = new google.map.Marker({
        position:{lat:43.6577, lng: -79.3909},
        map: map,
       })
   }

