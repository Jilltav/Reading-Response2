   //map option//

   function initMap(){
    var options = {
        zoom: 17,
        center: {lat: 43.8740383, lng: -79.7309874}



    }

    //new map//
   var map = new
       google.maps.Map(document.getElementById('map'), options);

       //marker

       var marker = new google.map.Marker({
        position:{lat:43.8740383, lng: -79.7309874},
        map: map,
       })
   }   
