// openlayerMap2Java.js


// define my layer groups that will be used to change the basemap for my map

var projection = ol.proj.get('EPSG:2878');

var Layer_Stamen_terrain = new ol.layer.Group({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.Stamen({layer: 'terrain'})
        })
    ]
});


var Layer_Bing_aerial_labels = new ol.layer.Group({
    layers: [
		new ol.layer.Tile({
			source: new ol.source.BingMaps({
				key: 'AgQRwdWCKHZjOU-fQDBXp1sy8t3AJcjhvGeI4FCBMomdQ8wHBHnGsFdhZLD24cUR',
				imagerySet: 'AerialWithLabels'
			})
		})
    ]
});

///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////////////

///// Creating my vector layer

var pinonCampCoord = [-105.506853,37.744129]
var moscaCampCoord = [-105.733082,37.677178]
var sanLuisPrkCoord = [-105.734814,37.665847] 
var sandDunesVisitCoord = [-105.512478,37.733058] 
var highDuneCoord = [-105.532994,37.749796]

var pinonCampPoint = new ol.geom.Point(ol.proj.fromLonLat(pinonCampCoord, projection));
var moscaCampPoint = new ol.geom.Point(ol.proj.fromLonLat(moscaCampCoord, projection));
var sanLuisPrkPoint = new ol.geom.Point(ol.proj.fromLonLat(sanLuisPrkCoord, projection));
var sandDunesVisitPoint = new ol.geom.Point(ol.proj.fromLonLat(sandDunesVisitCoord, projection));
var highDunePoint = new ol.geom.Point(ol.proj.fromLonLat(highDuneCoord, projection));

var pinonCampFeature = new ol.Feature({
	geometry: pinonCampPoint
})
var moscaCampFeature = new ol.Feature({
	geometry: moscaCampPoint
})
var sanLuisPrkFeature = new ol.Feature({
	geometry: sanLuisPrkPoint
})
var sandDunesVisitFeature = new ol.Feature({
	geometry: sandDunesVisitPoint
})
var highDuneFeature = new ol.Feature({
	geometry: highDunePoint
})

// layer based on custom geometries

var local_geoms = new ol.layer.Vector({
	source: new ol.source.Vector({
		features: [pinonCampFeature,moscaCampFeature,sanLuisPrkFeature,sandDunesVisitFeature,highDuneFeature]
	})
})
///////////////////////////////////////////////////////////////////////////////

// create our base map object for which we will later set the corresponding layer groups for the desired basemap
var myMap = new ol.Map({
	target: 'map',
	layers: [local_geoms],
	view: new ol.View({
		center: ol.proj.fromLonLat([-105.594406,37.745438]),
		zoom: 11
		
		})
	});



// define the function that sets the basemap type for the current map
function setMapType(newType) {
    if(newType == 'Bing_AerialWlabels') {
        myMap.setLayerGroup(Layer_Bing_aerial_labels);
    }    
	 else if (newType == 'STAMEN_Terrain') {
        myMap.setLayerGroup(Layer_Stamen_terrain);
    } 
     
}
///////////////////////////////////////////////////////////////////////////////

// Set the initial map basemap
setMapType('Bing_AerialWlabels')