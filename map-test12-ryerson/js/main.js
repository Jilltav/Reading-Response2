   //map option//

   function initMap(){
    var options = {
        zoom: 17,
        center: {lat: 43.6592619, lng: -79.3802132}



    }

    //new map//
   var map = new
       google.maps.Map(document.getElementById('map'), options);

       //marker

       var marker = new google.map.Marker({
        position:{lat:43.6592619, lng: -79.3802132},
        map: map,
       })
   }



   