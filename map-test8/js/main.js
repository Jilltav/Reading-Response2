   //map option//

   function initMap(){
    var options = {
        zoom: 17,
        center: {lat: 44.153674, lng: -79.8707946}



    }

    //new map//
   var map = new
       google.maps.Map(document.getElementById('map'), options);

       //marker

       var marker = new google.map.Marker({
        position:{lat:44.153674, lng: -79.8707946},
        map: map,
       })
   }


   