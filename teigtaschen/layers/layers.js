ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-636552.005061, 3700059.481870, 3971478.318698, 6790104.963016]);
var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type':'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Teigtasche_1 = new ol.format.GeoJSON();
var features_Teigtasche_1 = format_Teigtasche_1.readFeatures(json_Teigtasche_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Teigtasche_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Teigtasche_1.addFeatures(features_Teigtasche_1);
cluster_Teigtasche_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Teigtasche_1
});
var lyr_Teigtasche_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Teigtasche_1, 
                style: style_Teigtasche_1,
                popuplayertitle: 'Teigtasche',
                interactive: true,
                title: '<img src="styles/legend/Teigtasche_1.png" /> Teigtasche'
            });

lyr_ESRIGraylight_0.setVisible(true);lyr_Teigtasche_1.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_Teigtasche_1];
lyr_Teigtasche_1.set('fieldAliases', {'Name': 'Name', 'Herkunft': 'Herkunft', });
lyr_Teigtasche_1.set('fieldImages', {'Name': 'TextEdit', 'Herkunft': 'TextEdit', });
lyr_Teigtasche_1.set('fieldLabels', {'Name': 'header label - always visible', 'Herkunft': 'header label - always visible', });
lyr_Teigtasche_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});