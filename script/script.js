function myFunction() {
    document.getElementById("button").click = alert('Message Sent');
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, currentLocationError);
    } else { 
    console.log('getLocation failure');
        
    }
}
function showPosition(pos) {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        center: {lat:pos.coords.latitude, lng:pos.coords.longitude},
        zoom: 12
    };
    
    var map = new google.maps.Map(mapCanvas, mapOptions);
    
    addMarker({
        coords:{lat:pos.coords.latitude, lng:pos.coords.longitude},
        iconImage:'https://png.icons8.com/color/search',
        content:'<h1>Your location</h1>',
        map
    });
}
function currentLocationError(err) {
    console.log("Unable to find current location. Try turning on Location Services");
}
function addMarker(props){
    var marker = new google.maps.Marker({position:props.coords, map:props.map, icon:props.iconImage});
    var infoWindow = new google.maps.InfoWindow({content:props.content});
    
    marker.addListener('click', function(){
        infoWindow.open(props.map, marker);
    });
}

