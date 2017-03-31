// openlayerMapJava.js


// define my layer groups that will be used to change the basemap for my map



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
// create our base map object for which we will later set the corresponding layer groups for the desired basemap
var myMap = new ol.Map({
	target: 'map',
	view: new ol.View({
		center: ol.proj.fromLonLat([-105.594406,37.745438]),
		zoom: 11
		})
	});


///////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////
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