var wms_layers = [];


        var lyr_SwissFederalGeoportalNationalMapGrey_0 = new ol.layer.Tile({
            'title': 'SwissMap',
            'type':'overlay',
            'opacity': 0.270000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.swisstopo.admin.ch">© swisstopo</a>',
                url: 'https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-grau/default/current/3857/{z}/{x}/{y}.jpeg'
            })
        });
var format_Restaurant_1 = new ol.format.GeoJSON();
var features_Restaurant_1 = format_Restaurant_1.readFeatures(json_Restaurant_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Restaurant_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Restaurant_1.addFeatures(features_Restaurant_1);
cluster_Restaurant_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Restaurant_1
});
var lyr_Restaurant_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Restaurant_1, 
                style: style_Restaurant_1,
                popuplayertitle: 'Restaurant',
                interactive: true,
    title: 'Restaurant<br />\
    <img src="styles/legend/Restaurant_1_0.png" /> gut<br />\
    <img src="styles/legend/Restaurant_1_1.png" /> ok<br />\
    <img src="styles/legend/Restaurant_1_2.png" /> schlecht<br />\
    <img src="styles/legend/Restaurant_1_3.png" /> vorzüglich<br />' });

lyr_SwissFederalGeoportalNationalMapGrey_0.setVisible(true);lyr_Restaurant_1.setVisible(true);
var layersList = [lyr_SwissFederalGeoportalNationalMapGrey_0,lyr_Restaurant_1];
lyr_Restaurant_1.set('fieldAliases', {'Restaurant': 'Restaurant', 'Wertung': 'Wertung', 'Bemerkung': 'Bemerkung', 'Ortschaft': 'Ortschaft', });
lyr_Restaurant_1.set('fieldImages', {'Restaurant': 'TextEdit', 'Wertung': 'TextEdit', 'Bemerkung': 'TextEdit', 'Ortschaft': 'TextEdit', });
lyr_Restaurant_1.set('fieldLabels', {'Restaurant': 'inline label - always visible', 'Wertung': 'inline label - always visible', 'Bemerkung': 'inline label - always visible', 'Ortschaft': 'inline label - visible with data', });
lyr_Restaurant_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});