function initialize() {
var geoCenter = new google.maps.LatLng(36.643476,-105.968285)
var abiDam = new google.maps.LatLng(36.240461,-106.428584)
var eagleNest = new google.maps.LatLng(36.540583,-105.268217)
var heronLAKE = new google.maps.LatLng(36.695736,-106.660659)
var chama = new google.maps.LatLng(36.902406,-106.578959)
var vallecitos = new google.maps.LatLng(36.494746,-106.116997)

var mapOptions = {
zoom: 9,
center: geoCenter,

mapTypeId: google.maps.MapTypeId.ROADMAP,
styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#fc6103"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ffff00"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#f50a0a"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#0000ff"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
]};

var map = new google.maps.Map(document.getElementById("map_canvas"),
 mapOptions);

var abiDAM = new google.maps.Marker({
	position: abiDam,
	title:"Abiquiu Lake State Park" });
	abiDAM.setMap(map);
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
	chma.setMap(map);

var abiDAMInfoContent = '<div class="infoBox">' +
'<p>This is the location of Abiquiu Lake State Park: Great area for boating, swimming, and fishing</p>' +
'</div>'
var abiDAMInfoWindow = new google.maps.InfoWindow({
content: abiDAMInfoContent
});
google.maps.event.addListener(abiDAM, 'click', function() {
abiDAMInfoWindow.open(map,abiDAM);
 });

 
var eglNestInfoContent = '<div class="infoBox">' +
'<p>This is the location of Eagles Nest State Park: Great area for fishing</p>' +
'</div>'
var eglNestInfoWindow = new google.maps.InfoWindow({
content: eglNestInfoContent
});
google.maps.event.addListener(eglNest, 'click', function() {
eglNestInfoWindow.open(map,eglNest);
 });
 
var hernLKEInfoContent = '<div class="infoBox">' +
'<p>This is the location of Heron Lake State Park: Great area for boating and fishing</p>' +
'</div>'
var hernLKEInfoWindow = new google.maps.InfoWindow({
content: hernLKEInfoContent
});
google.maps.event.addListener(hernLKE, 'click', function() {
hernLKEInfoWindow.open(map,hernLKE);
 });
 
 
var chmaInfoContent = '<div class="infoBox">' +
'<p>This is the location of the town of Chama: Great area for fishing, camping or hiking</p>' +
'</div>'
var chmaInfoWindow = new google.maps.InfoWindow({
content: chmaInfoContent
});
google.maps.event.addListener(chma, 'click', function() {
chmaInfoWindow.open(map,chma);
 });

}

