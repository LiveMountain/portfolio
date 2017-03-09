function initialize() {
var geoCenter = new google.maps.LatLng(36.107014,-106.056690)
var abiDam = new google.maps.LatLng(36.239695,-106.424282)
var elRito = new google.maps.LatLng(36.400170,-106.253178)
var sipa = new google.maps.LatLng(36.155263,-105.544453)
var sntaCruz = new google.maps.LatLng(35.979108,-105.914748)
var pajMtn = new google.maps.LatLng(35.885634,-106.401043)

var mapOptions = {
zoom: 8,
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
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#c0c0c0"
      },
      {
        "visibility": "on"
      },
      {
        "weight": 2
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "visibility": "on"
      },
      {
        "weight": 8
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
    "featureType": "landscape.natural.terrain",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#808000"
      },
      {
        "visibility": "on"
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
        "color": "#800000"
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
        "color": "#ff8000"
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
var elRitoCamp = new google.maps.Marker({
	position: elRito,
	title:"El Rito Campground" });
	elRitoCamp.setMap(map);
var sipaSki = new google.maps.Marker({
	position: sipa,
	title:"Sipapu Ski Resort"
	});
	sipaSki.setMap(map);
var sntaCruzLake = new google.maps.Marker({
	position: sntaCruz,
	title:"Santa Cruz Lake"
	});
	sntaCruzLake.setMap(map);
var pajaritoMtn = new google.maps.Marker({
	position: pajMtn,
	title:"Pajarito Mountain"
	});
	pajaritoMtn.setMap(map);

var abiDAMInfoContent = '<div class="infoBox">' +
'<p>This is the location of Abiquiu Lake State Park: </p>' +
'<p>During the summer I enjoy boating, swimming, and fishing here</p>' +
'</div>'
var abiDAMInfoWindow = new google.maps.InfoWindow({
content: abiDAMInfoContent
});
google.maps.event.addListener(abiDAM, 'click', function() {
abiDAMInfoWindow.open(map,abiDAM);
 });

 
var elRitoCampInfoContent = '<div class="infoBox">' +
'<p>This is the location of El Rito Campgrounds</p>' +
'<p>During the summer this is a great place to camp</p>' +
'</div>'
var elRitoCampInfoWindow = new google.maps.InfoWindow({
content: elRitoCampInfoContent
});
google.maps.event.addListener(elRitoCamp, 'click', function() {
elRitoCampInfoWindow.open(map,elRitoCamp);
 });
 
var sipaSkiInfoContent = '<div class="infoBox">' +
'<p>This is the location of Sipapu Ski Resort</p>' +
'<p>During the ski season, this small resort is a nice place to enjoy winter</p>'
'</div>'
var sipaSkiInfoWindow = new google.maps.InfoWindow({
content: sipaSkiInfoContent
});
google.maps.event.addListener(sipaSki, 'click', function() {
sipaSkiInfoWindow.open(map,sipaSki);
 });
 
 
var sntaCruzLakeInfoContent = '<div class="infoBox">' +
'<p>This is the location of Santa Cruz Lake: </p>' +
'<p>During the Spring and Summer seasons this is a great fishing spot</p>' +
'</div>'
var sntaCruzLakeInfoWindow = new google.maps.InfoWindow({
content: sntaCruzLakeInfoContent
});
google.maps.event.addListener(sntaCruzLake, 'click', function() {
sntaCruzLakeInfoWindow.open(map,sntaCruzLake);
 });
 

var pajaritoMtnInfoContent = '<div class="infoBox">' +
'<p>This is the location of Pajarito Mountain, West of Los Alamos, NM: </p>' +
'<p>During the Summer, this is a beautiful area for hiking and mountain biking</p>' +
'</div>'
var pajaritoMtnInfoWindow = new google.maps.InfoWindow({
content: pajaritoMtnInfoContent
});
google.maps.event.addListener(pajaritoMtn, 'click', function() {
pajaritoMtnInfoWindow.open(map,pajaritoMtn);
 });

}

