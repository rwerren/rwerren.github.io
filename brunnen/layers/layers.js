var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 4.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Zuerich_1 = new ol.format.GeoJSON();
var features_Zuerich_1 = format_Zuerich_1.readFeatures(json_Zuerich_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zuerich_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zuerich_1.addFeatures(features_Zuerich_1);
var lyr_Zuerich_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zuerich_1, 
                style: style_Zuerich_1,
                popuplayertitle: 'Zuerich',
                interactive: false,
    title: 'Zuerich<br />\
    <img src="styles/legend/Zuerich_1_0.png" /> drinking_water<br />\
    <img src="styles/legend/Zuerich_1_1.png" /> fountain<br />' });
var format_Waldshut_2 = new ol.format.GeoJSON();
var features_Waldshut_2 = format_Waldshut_2.readFeatures(json_Waldshut_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waldshut_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waldshut_2.addFeatures(features_Waldshut_2);
var lyr_Waldshut_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waldshut_2, 
                style: style_Waldshut_2,
                popuplayertitle: 'Waldshut',
                interactive: true,
    title: 'Waldshut<br />\
    <img src="styles/legend/Waldshut_2_0.png" /> drinking_water<br />\
    <img src="styles/legend/Waldshut_2_1.png" /> fountain<br />' });
var format_London_3 = new ol.format.GeoJSON();
var features_London_3 = format_London_3.readFeatures(json_London_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_London_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_London_3.addFeatures(features_London_3);
var lyr_London_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_London_3, 
                style: style_London_3,
                popuplayertitle: 'London',
                interactive: false,
    title: 'London<br />\
    <img src="styles/legend/London_3_0.png" /> drinking_water<br />\
    <img src="styles/legend/London_3_1.png" /> fountain<br />' });
var format_Jakarta_4 = new ol.format.GeoJSON();
var features_Jakarta_4 = format_Jakarta_4.readFeatures(json_Jakarta_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jakarta_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jakarta_4.addFeatures(features_Jakarta_4);
var lyr_Jakarta_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jakarta_4, 
                style: style_Jakarta_4,
                popuplayertitle: 'Jakarta',
                interactive: false,
    title: 'Jakarta<br />\
    <img src="styles/legend/Jakarta_4_0.png" /> drinking_water<br />\
    <img src="styles/legend/Jakarta_4_1.png" /> fountain<br />' });
var format_Basel_5 = new ol.format.GeoJSON();
var features_Basel_5 = format_Basel_5.readFeatures(json_Basel_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Basel_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Basel_5.addFeatures(features_Basel_5);
var lyr_Basel_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Basel_5, 
                style: style_Basel_5,
                popuplayertitle: 'Basel',
                interactive: false,
    title: 'Basel<br />\
    <img src="styles/legend/Basel_5_0.png" /> drinking_water<br />\
    <img src="styles/legend/Basel_5_1.png" /> fountain<br />' });
var format_BaselLS_6 = new ol.format.GeoJSON();
var features_BaselLS_6 = format_BaselLS_6.readFeatures(json_BaselLS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaselLS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaselLS_6.addFeatures(features_BaselLS_6);
var lyr_BaselLS_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaselLS_6, 
                style: style_BaselLS_6,
                popuplayertitle: 'Basel-LS',
                interactive: true,
    title: 'Basel-LS<br />\
    <img src="styles/legend/BaselLS_6_0.png" /> drinking_water<br />\
    <img src="styles/legend/BaselLS_6_1.png" /> fountain<br />' });
var format_Aargau_7 = new ol.format.GeoJSON();
var features_Aargau_7 = format_Aargau_7.readFeatures(json_Aargau_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aargau_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aargau_7.addFeatures(features_Aargau_7);
var lyr_Aargau_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aargau_7, 
                style: style_Aargau_7,
                popuplayertitle: 'Aargau',
                interactive: true,
    title: 'Aargau<br />\
    <img src="styles/legend/Aargau_7_0.png" /> drinking_water<br />\
    <img src="styles/legend/Aargau_7_1.png" /> fountain<br />' });

lyr_Positron_0.setVisible(true);lyr_Zuerich_1.setVisible(true);lyr_Waldshut_2.setVisible(true);lyr_London_3.setVisible(true);lyr_Jakarta_4.setVisible(true);lyr_Basel_5.setVisible(true);lyr_BaselLS_6.setVisible(true);lyr_Aargau_7.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Zuerich_1,lyr_Waldshut_2,lyr_London_3,lyr_Jakarta_4,lyr_Basel_5,lyr_BaselLS_6,lyr_Aargau_7];
lyr_Zuerich_1.set('fieldAliases', {'name': 'name', 'amenity': 'amenity', '@lat': '@lat', '@lon': '@lon', });
lyr_Waldshut_2.set('fieldAliases', {'@id': '@id', 'name': 'name', 'amenity': 'amenity', '@lat': '@lat', '@lon': '@lon', });
lyr_London_3.set('fieldAliases', {'name': 'name', 'amenity': 'amenity', '@lat': '@lat', '@lon': '@lon', });
lyr_Jakarta_4.set('fieldAliases', {'name': 'name', 'amenity': 'amenity', '@lat': '@lat', '@lon': '@lon', });
lyr_Basel_5.set('fieldAliases', {'name': 'name', 'amenity': 'amenity', '@lat': '@lat', '@lon': '@lon', });
lyr_BaselLS_6.set('fieldAliases', {'@id': '@id', 'name': 'name', 'amenity': 'amenity', '@lat': '@lat', '@lon': '@lon', });
lyr_Aargau_7.set('fieldAliases', {'name': 'name', 'amenity': 'amenity', '@lat': '@lat', '@lon': '@lon', });
lyr_Zuerich_1.set('fieldImages', {'name': 'TextEdit', 'amenity': 'TextEdit', '@lat': 'TextEdit', '@lon': 'TextEdit', });
lyr_Waldshut_2.set('fieldImages', {'@id': 'TextEdit', 'name': 'TextEdit', 'amenity': 'TextEdit', '@lat': 'TextEdit', '@lon': 'TextEdit', });
lyr_London_3.set('fieldImages', {'name': 'TextEdit', 'amenity': 'TextEdit', '@lat': 'TextEdit', '@lon': 'TextEdit', });
lyr_Jakarta_4.set('fieldImages', {'name': 'TextEdit', 'amenity': 'TextEdit', '@lat': 'TextEdit', '@lon': 'TextEdit', });
lyr_Basel_5.set('fieldImages', {'name': 'TextEdit', 'amenity': 'TextEdit', '@lat': 'TextEdit', '@lon': 'TextEdit', });
lyr_BaselLS_6.set('fieldImages', {'@id': 'TextEdit', 'name': 'TextEdit', 'amenity': 'TextEdit', '@lat': 'TextEdit', '@lon': 'TextEdit', });
lyr_Aargau_7.set('fieldImages', {'name': 'TextEdit', 'amenity': 'TextEdit', '@lat': 'TextEdit', '@lon': 'TextEdit', });
lyr_Zuerich_1.set('fieldLabels', {'name': 'no label', 'amenity': 'no label', '@lat': 'no label', '@lon': 'no label', });
lyr_Waldshut_2.set('fieldLabels', {'@id': 'no label', 'name': 'no label', 'amenity': 'no label', '@lat': 'no label', '@lon': 'no label', });
lyr_London_3.set('fieldLabels', {'name': 'no label', 'amenity': 'no label', '@lat': 'no label', '@lon': 'no label', });
lyr_Jakarta_4.set('fieldLabels', {'name': 'no label', 'amenity': 'no label', '@lat': 'no label', '@lon': 'no label', });
lyr_Basel_5.set('fieldLabels', {'name': 'no label', 'amenity': 'no label', '@lat': 'no label', '@lon': 'no label', });
lyr_BaselLS_6.set('fieldLabels', {'@id': 'no label', 'name': 'no label', 'amenity': 'no label', '@lat': 'no label', '@lon': 'no label', });
lyr_Aargau_7.set('fieldLabels', {'name': 'no label', 'amenity': 'no label', '@lat': 'no label', '@lon': 'no label', });
lyr_Aargau_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});