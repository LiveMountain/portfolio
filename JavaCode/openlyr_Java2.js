// openlayerMap2Java.js


// set a projection to recall throughout the map


//proj4.defs("EPSG:2878","+proj=lcc +lat_1=38.43333333333333 +lat_2=37.23333333333333 +lat_0=36.66666666666666 +lon_0=-105.5 +x_0=914401.8288036576 +y_0=304800.6096012192 +ellps=GRS80 +to_meter=0.3048006096012192 +no_defs"); 

var projection = ol.proj.get('EPSG:3857');


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


///////////////////////////////////////////////////////////////////////////////
// define layer objects

var basemap_tiled = new ol.layer.Tile({
	source: new ol.source.TileWMS({
	url: 'https://basemap.nationalmap.gov/arcgis/services/USGSTopo/MapServer/WmsServer?',
	  params: {
		LAYERS: 0,
		FORMAT: 'image/png',
		TRANSPARENT: true
	  },
	  attributions: [
	    new ol.Attribution({
		  html: 'Data provided by the <a href="http://basemap.nationalmap.gov">National Map</a>.'
		})
	  ]
	})
})

// layer based on custom geometries

var local_camp = new ol.layer.Vector({
	source: new ol.source.Vector({
		features: [pinonCampFeature,moscaCampFeature]
	})
})

var local_feats = new ol.layer.Vector({
	source: new ol.source.Vector({
		features: [sanLuisPrkFeature,sandDunesVisitFeature,highDuneFeature]
	})
})

var area_kml = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'https://github.com/LiveMountain/portfolio/blob/master/GreatSandDunesArea_KML.kmz',
		projection: projection,
		format: new ol.format.KML()
	})
})

// create our base map object for which we will later set the corresponding layer groups for the desired basemap

var myMap = new ol.Map({
	target: 'map',
	layers: [basemap_tiled,local_camp,local_feats,area_kml], //[added layers]
	view: new ol.View({
		center: ol.proj.fromLonLat([-105.594406,37.745438]), 
		zoom:11,
		projection: projection
		})
	});



///////////////////////////////////////////////////////////////////////////////

