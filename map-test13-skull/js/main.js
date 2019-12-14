   //map option//

   function initMap(){
    var options = {
        zoom: 17,
        center: {lat: 20.5851387, lng: -87.1109849}



    }

    //new map//
   var map = new
       google.maps.Map(document.getElementById('map'), options);

       //marker

       var marker = new google.map.Marker({
        position:{lat:20.5851387, lng: -87.1109849},
        map: map,
       })
   }



   