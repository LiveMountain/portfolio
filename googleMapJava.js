function initialize() {
var geoClassroom = new google.maps.LatLng(35.084280,-106.624073)

var mapOptions = {
zoom: 15,
center: geoClassroom,

mapTypeId: google.maps.MapTypeId.ROADMAP};

var map = new google.maps.Map(
 document.getElementById("map_canvas"),
 mapOptions);}
