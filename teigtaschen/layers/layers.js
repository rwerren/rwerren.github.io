var wms_layers = [];


        var lyr_ESRIWorldTopo_0 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_dumplings_1 = new ol.format.GeoJSON();
var features_dumplings_1 = format_dumplings_1.readFeatures(json_dumplings_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dumplings_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dumplings_1.addFeatures(features_dumplings_1);
var lyr_dumplings_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dumplings_1, 
                style: style_dumplings_1,
                popuplayertitle: 'dumplings',
                interactive: true,
                title: '<img src="styles/legend/dumplings_1.png" /> dumplings'
            });

lyr_ESRIWorldTopo_0.setVisible(true);lyr_dumplings_1.setVisible(true);
var layersList = [lyr_ESRIWorldTopo_0,lyr_dumplings_1];
lyr_dumplings_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Herkunft': 'Herkunft', });
lyr_dumplings_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Herkunft': 'TextEdit', });
lyr_dumplings_1.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'Herkunft': 'inline label - visible with data', });
lyr_dumplings_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});