function initialize() {
var geoClassroom = new google.maps.LatLng(35.084280,-106.624073)
var majorConstructOne = new google.maps.LatLng(35.08137222,-106.62694444)
var majorConstructTwo = new google.maps.LatLng(35.08105278,-106.62194444)
var startConstruct = new google.maps.LatLng(35.08241667,-106.63500000)
var endConstruct = new google.maps.LatLng(35.08102778,-106.61333333)

var mapOptions = {
zoom: 15,
center: geoClassroom,

mapTypeId: google.maps.MapTypeId.ROADMAP};

var map = new google.maps.Map(document.getElementById("map_canvas"),
 mapOptions);

var constructArea = new google.maps.Marker({
	position: majorConstructOne,
	title:"Central and University ART construction"});
	constructArea.setMap(map);
var constructArea2 = new google.maps.Marker({
	position: majorConstructTwo,
	title:"Central and Yale ART construction" });
	constructArea2.setMap(map);
var classroomMarker = new google.maps.Marker({
	position: geoClassroom,
	title:"Geography 485L/585L Classroom, Bandelier East, Room 106"
	});
	classroomMarker.setMap(map);
var majConstructAreaCoordinates = [
	startConstruct,
	majorConstructOne,
	majorConstructTwo,
	endConstruct];
var constructZone = new google.maps.Polyline({
	path: majConstructAreaCoordinates,
	strokeColor: "#FF0000",
	strokeOpacity: 1.0,
	strokeWeight: 5});
constructZone.setMap(map)}

