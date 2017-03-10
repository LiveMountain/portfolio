function initialize() {
var geoCenter = new google.maps.LatLng(36.060574,-107.961692)


var mapOptions = {
zoom: 18,
center: geoCenter,

mapTypeId: google.maps.MapTypeId.SATELLITE,};

var map = new google.maps.Map(document.getElementById("map_canvas"),
 mapOptions);

var geoCenterPT = new google.maps.Marker({
	position: geoCenter,
	title:"Center of Map" });
	geoCenterPT.setMap(map);


var geoCenterPTInfoContent = '<div class="infoBox">' +
'<p>Here lies the remains of my sanity after all my midterms...RIP</p>' +
'</div>'
var geoCenterPTInfoWindow = new google.maps.InfoWindow({
content: geoCenterPTInfoContent
});
google.maps.event.addListener(geoCenterPT, 'click', function() {
geoCenterPTInfoWindow.open(map,geoCenterPT);
 });

 

 

}