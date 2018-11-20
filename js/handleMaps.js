function initMap() {
	//let location = {lat: 53.6152714, lng: -113.6406225};
	let geocoder = new google.maps.Geocoder();
	let geoLatLong = {};
	geocoder.geocode({'address':"T8N3T6"},function(results,status){
		const lat = results[0].geometry.location.lat();
       	const long = results[0].geometry.location.lng();
       	console.log(lat);
       	geoLatLong.lat = lat;
       	geoLatLong.lng = long;
       	let map = new google.maps.Map(document.getElementById('map'), {
        center: geoLatLong,
        zoom: 18
    	});
       	/*
	    let marker = new google.maps.Marker({
	    	position: geoLatLong,
	    	map:map
	    });
	    */
	});
    

   //return map;
}

function initPage(){
	console.log("test0");
	initMap();
}

//$(initPage);