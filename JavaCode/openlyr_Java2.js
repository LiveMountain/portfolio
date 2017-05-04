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

// Defining styles for vector styles

var stroke = new ol.style.Stroke({color: 'black', width: 1});
var fill1 = new ol.style.Fill({color: 'red'});
var fill2 = new ol.style.Fill({color: 'green'});
var fill3 = new ol.style.Fill({color: 'blue'});
var fill4 = new ol.style.Fill({color: 'yellow'});
var fill5 = new ol.style.Fill({color: [0,255,0]});

// layer based on custom geometries

//Pinon Campground
var pinon_camp = new ol.layer.Vector({
	source: new ol.source.Vector({
		features: [pinonCampFeature]
	}),
	style: new ol.style.Style({
          image: new ol.style.RegularShape({
            fill: fill1,
            stroke: stroke,
            points: 4,
            radius: 10,
            angle: Math.PI / 2
          })
        }),
})

//Mosca Campground
var mosca_camp = new ol.layer.Vector({
	source: new ol.source.Vector({
		features: [moscaCampFeature]
	}),
	style: new ol.style.Style({
          image: new ol.style.RegularShape({
            fill: fill2,
            stroke: stroke,
            points: 4,
            radius: 10,
            angle: Math.PI / 2
          })
        }),
})

//San Luis Lake State Park
var sanLuisParkArea = new ol.layer.Vector({
	source: new ol.source.Vector({
		features: [sanLuisPrkFeature]
	}),
	style: new ol.style.Style({
          image: new ol.style.RegularShape({
            fill: fill3,
            stroke: stroke,
            points: 3,
            radius: 10,
            
          })
        }),
})

//Great Sand Dunes Visitor Center
var sandDunesVisitor = new ol.layer.Vector({
	source: new ol.source.Vector({
		features: [sandDunesVisitFeature]
	}),
	style: new ol.style.Style({
          image: new ol.style.RegularShape({
            fill: fill4,
            stroke: stroke,
            points: 5,
            radius: 10,
            
          })
        }),
})

//Highest Dune in the park
var highestDune = new ol.layer.Vector({
	source: new ol.source.Vector({
		features: [highDuneFeature]
	}),
	style: new ol.style.Style({
          image: new ol.style.RegularShape({
            fill: fill5,
            stroke: stroke,
            points: 25,
            radius: 5,
            angle: Math.PI / 3
          })
        }),
})

var dune_area_kml = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'https://livemountain.github.io/portfolio/kml/GreatSandDunesArea_KML.kml',
		projection: projection,
		format: new ol.format.KML({
				extractStyles: true,
		})
	})
})

var lake_area_kml = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'https://livemountain.github.io/portfolio/kml/SanLuis_Lake.kml',
		projection: projection,
		format: new ol.format.KML({
				extractStyles: true,
		})
	})
})


// create our base map object for which we will later set the corresponding layer groups for the desired basemap

var myMap = new ol.Map({
	target: 'map',
	layers: [basemap_tiled,pinon_camp,mosca_camp,sanLuisParkArea,sandDunesVisitor,highestDune,dune_area_kml,lake_area_kml], //[added layers]
	view: new ol.View({
		center: ol.proj.fromLonLat([-105.594406,37.745438]), 
		zoom:11,
		projection: projection
		})
	});



///////////////////////////////////////////////////////////////////////////////

