function initialize() {
var geoCenter = new google.maps.LatLng(36.008108,-106.065021)

var abiDam = new google.maps.LatLng(36.240461,-106428584)
var eagleNest = new google.maps.LatLng(36.540583,-105.268217)
var heronLAKE = new google.maps.LatLng(36.695736,-106.660659)
var chama = new google.maps.LatLng(36.902406,-106.578959)
var vallecitos = new google.maps.LatLng(36.494746,-106.116997)

var mapOptions = {
zoom: 9,
center: geoCenter,

mapTypeId: google.maps.MapTypeId.ROADMAP};

var map = new google.maps.Map(document.getElementById("map_canvas"),
 mapOptions);

var abqDam = new google.maps.Marker({
	position: abiDam,
	title:"Abiquiu Dam State Park"});
	abqDam.setMap(map);
var eglNest = new google.maps.Marker({
	position: eagleNest,
	title:"Eagle's Nest State Park" });
	eglNest.setMap(map);
var hernLKE = new google.maps.Marker({
	position: heronLAKE,
	title:"Heron Lake State Park"
	});
	hernLKE.setMap(map);
var chma = new google.maps.Marker({
	position: chama,
	title:"Town of Chama"
	});
chma.setMap(map);}

