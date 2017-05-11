// FinalExamJava


// set a projection to recall throughout the map

var projection = ol.proj.get('EPSG:4326');




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
		  html: 'Data provided by the <a href="https://basemap.nationalmap.gov/arcgis/services/USGSTopo/MapServer/WmsServer?">National Map</a>.'
		})
	  ]
	})
})
var wms_layers = new ol.layer.Tile({
	source: new ol.source.TileWMS({
	url: 'http://mapper.internetmapping.net:8081/geoserver/Roller_Workspace/clipped/wms?service=WMS&version=1.1.0&request=GetMap&layers=Roller_Workspace/clipped',
	  params: {
		LAYERS: 1,
		FORMAT: 'image/png',
		TRANSPARENT: true
	  },
	  attributions: [
	    new ol.Attribution({
		  html: 'Data provided by the <a href="https://mapper.internetmapping.net:8081/geoserver/Roller_Workspace/clipped/wms?">National Map</a>.'
		})
	  ]
	})
})





// create our base map object for which we will later set the corresponding layer groups for the desired basemap

var myMap = new ol.Map({
	target: 'map',
	layers: [basemap_tiled,wms_layers], //[added layers]
	view: new ol.View({
		center: ol.proj.fromLonLat([-106.602831,35.082371]), 
		zoom:11,
		projection: projection
		})
	});



///////////////////////////////////////////////////////////////////////////////