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
var format_London_2 = new ol.format.GeoJSON();
var features_London_2 = format_London_2.readFeatures(json_London_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_London_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_London_2.addFeatures(features_London_2);
var lyr_London_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_London_2, 
                style: style_London_2,
                popuplayertitle: 'London',
                interactive: false,
    title: 'London<br />\
    <img src="styles/legend/London_2_0.png" /> drinking_water<br />\
    <img src="styles/legend/London_2_1.png" /> fountain<br />' });
var format_Jakarta_3 = new ol.format.GeoJSON();
var features_Jakarta_3 = format_Jakarta_3.readFeatures(json_Jakarta_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jakarta_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jakarta_3.addFeatures(features_Jakarta_3);
var lyr_Jakarta_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jakarta_3, 
                style: style_Jakarta_3,
                popuplayertitle: 'Jakarta',
                interactive: false,
    title: 'Jakarta<br />\
    <img src="styles/legend/Jakarta_3_0.png" /> drinking_water<br />\
    <img src="styles/legend/Jakarta_3_1.png" /> fountain<br />' });
var format_Basel_4 = new ol.format.GeoJSON();
var features_Basel_4 = format_Basel_4.readFeatures(json_Basel_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Basel_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Basel_4.addFeatures(features_Basel_4);
var lyr_Basel_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Basel_4, 
                style: style_Basel_4,
                popuplayertitle: 'Basel',
                interactive: false,
    title: 'Basel<br />\
    <img src="styles/legend/Basel_4_0.png" /> drinking_water<br />\
    <img src="styles/legend/Basel_4_1.png" /> fountain<br />' });
var format_Aargau_5 = new ol.format.GeoJSON();
var features_Aargau_5 = format_Aargau_5.readFeatures(json_Aargau_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aargau_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aargau_5.addFeatures(features_Aargau_5);
var lyr_Aargau_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aargau_5, 
                style: style_Aargau_5,
                popuplayertitle: 'Aargau',
                interactive: false,
    title: 'Aargau<br />\
    <img src="styles/legend/Aargau_5_0.png" /> drinking_water<br />\
    <img src="styles/legend/Aargau_5_1.png" /> fountain<br />' });

lyr_Positron_0.setVisible(true);lyr_Zuerich_1.setVisible(true);lyr_London_2.setVisible(true);lyr_Jakarta_3.setVisible(true);lyr_Basel_4.setVisible(true);lyr_Aargau_5.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Zuerich_1,lyr_London_2,lyr_Jakarta_3,lyr_Basel_4,lyr_Aargau_5];
lyr_Zuerich_1.set('fieldAliases', {'name': 'name', 'amenity': 'amenity', '@lat': '@lat', '@lon': '@lon', });
lyr_London_2.set('fieldAliases', {'name': 'name', 'amenity': 'amenity', '@lat': '@lat', '@lon': '@lon', });
lyr_Jakarta_3.set('fieldAliases', {'name': 'name', 'amenity': 'amenity', '@lat': '@lat', '@lon': '@lon', });
lyr_Basel_4.set('fieldAliases', {'name': 'name', 'amenity': 'amenity', '@lat': '@lat', '@lon': '@lon', });
lyr_Aargau_5.set('fieldAliases', {'name': 'name', 'amenity': 'amenity', '@lat': '@lat', '@lon': '@lon', });
lyr_Zuerich_1.set('fieldImages', {'name': 'TextEdit', 'amenity': 'TextEdit', '@lat': 'TextEdit', '@lon': 'TextEdit', });
lyr_London_2.set('fieldImages', {'name': 'TextEdit', 'amenity': 'TextEdit', '@lat': 'TextEdit', '@lon': 'TextEdit', });
lyr_Jakarta_3.set('fieldImages', {'name': 'TextEdit', 'amenity': 'TextEdit', '@lat': 'TextEdit', '@lon': 'TextEdit', });
lyr_Basel_4.set('fieldImages', {'name': 'TextEdit', 'amenity': 'TextEdit', '@lat': 'TextEdit', '@lon': 'TextEdit', });
lyr_Aargau_5.set('fieldImages', {'name': 'TextEdit', 'amenity': 'TextEdit', '@lat': 'TextEdit', '@lon': 'TextEdit', });
lyr_Zuerich_1.set('fieldLabels', {'name': 'no label', 'amenity': 'no label', '@lat': 'no label', '@lon': 'no label', });
lyr_London_2.set('fieldLabels', {'name': 'no label', 'amenity': 'no label', '@lat': 'no label', '@lon': 'no label', });
lyr_Jakarta_3.set('fieldLabels', {'name': 'no label', 'amenity': 'no label', '@lat': 'no label', '@lon': 'no label', });
lyr_Basel_4.set('fieldLabels', {'name': 'no label', 'amenity': 'no label', '@lat': 'no label', '@lon': 'no label', });
lyr_Aargau_5.set('fieldLabels', {'name': 'no label', 'amenity': 'no label', '@lat': 'no label', '@lon': 'no label', });
lyr_Aargau_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});