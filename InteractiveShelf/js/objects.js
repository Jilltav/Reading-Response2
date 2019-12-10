function initMap(){

	var options={

		zoom:8,
		center: {lat: 43.6577°, lng: -79.3910°}
	}

	var .cubby = new

	google.maps.Map(document.getElementById('.cubby'), options)
}

var marker = new google.maps.marker({
	position;{lat:43.6577°, lng: -79.3910°},
	map:map,
	icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
;

var infoWindow = new google.maps.InfoWindow({
	content: '<h1> I was born here </h1>'
});

marker.addListener('click', function(){
	infoWindow.open(map, marker);
})