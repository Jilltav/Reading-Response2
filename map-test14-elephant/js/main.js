   //map option//

   function initMap(){
    var options = {
        zoom: 17,
        center: {lat: 44.0563422, lng: -79.4853164}



    }

    //new map//
   var map = new
       google.maps.Map(document.getElementById('map'), options);

       //marker

       var marker = new google.map.Marker({
        position:{lat:44.0563422, lng: -79.4853164},
        map: map,
       })
   }



   