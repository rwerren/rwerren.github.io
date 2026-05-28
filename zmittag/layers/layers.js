var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Restaurants_1 = new ol.format.GeoJSON();
var features_Restaurants_1 = format_Restaurants_1.readFeatures(json_Restaurants_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Restaurants_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Restaurants_1.addFeatures(features_Restaurants_1);
cluster_Restaurants_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Restaurants_1
});
var lyr_Restaurants_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Restaurants_1, 
                style: style_Restaurants_1,
                popuplayertitle: 'Restaurants',
                interactive: true,
    title: 'Restaurants<br />\
    <img src="styles/legend/Restaurants_1_0.png" /> gut<br />\
    <img src="styles/legend/Restaurants_1_1.png" /> ok<br />\
    <img src="styles/legend/Restaurants_1_2.png" /> schlecht<br />\
    <img src="styles/legend/Restaurants_1_3.png" /> vorzüglich<br />' });

lyr_ESRIGraylight_0.setVisible(true);lyr_Restaurants_1.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_Restaurants_1];
lyr_Restaurants_1.set('fieldAliases', {'Restaurant': 'Restaurant', 'Wertung': 'Wertung', 'Bemerkung': 'Bemerkung', 'Ortschaft': 'Ortschaft', });
lyr_Restaurants_1.set('fieldImages', {'Restaurant': 'TextEdit', 'Wertung': 'TextEdit', 'Bemerkung': 'TextEdit', 'Ortschaft': 'TextEdit', });
lyr_Restaurants_1.set('fieldLabels', {'Restaurant': 'no label', 'Wertung': 'no label', 'Bemerkung': 'no label', 'Ortschaft': 'no label', });
lyr_Restaurants_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});