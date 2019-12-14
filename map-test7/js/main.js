   //map option//

   function initMap(){
    var options = {
        zoom: 17,
        center: {lat: 43.8594321, lng: -79.7069569}



    }

    //new map//
   var map = new
       google.maps.Map(document.getElementById('map'), options);

       //marker

       var marker = new google.map.Marker({
        position:{lat:443.8594321, lng: -79.7069569},
        map: map,
       })
   }



   