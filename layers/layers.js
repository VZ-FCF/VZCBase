var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_VanZandtCounty_1 = new ol.format.GeoJSON();
var features_VanZandtCounty_1 = format_VanZandtCounty_1.readFeatures(json_VanZandtCounty_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VanZandtCounty_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VanZandtCounty_1.addFeatures(features_VanZandtCounty_1);
var lyr_VanZandtCounty_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VanZandtCounty_1, 
                style: style_VanZandtCounty_1,
                popuplayertitle: 'VanZandtCounty',
                interactive: false,
                title: '<img src="styles/legend/VanZandtCounty_1.png" /> VanZandtCounty'
            });

lyr_OSMStandard_0.setVisible(true);lyr_VanZandtCounty_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_VanZandtCounty_1];
lyr_VanZandtCounty_1.set('fieldAliases', {'CMPTRL_CNT': 'CMPTRL_CNT', 'DPS_CNTY_N': 'DPS_CNTY_N', 'FIPS_ST_CN': 'FIPS_ST_CN', 'TXDOT_CNTY': 'TXDOT_CNTY', 'TXDOT_DIST': 'TXDOT_DIST', 'CNTY_NM': 'CNTY_NM', 'GID': 'GID', });
lyr_VanZandtCounty_1.set('fieldImages', {'CMPTRL_CNT': 'TextEdit', 'DPS_CNTY_N': 'TextEdit', 'FIPS_ST_CN': 'TextEdit', 'TXDOT_CNTY': 'TextEdit', 'TXDOT_DIST': 'TextEdit', 'CNTY_NM': 'TextEdit', 'GID': 'TextEdit', });
lyr_VanZandtCounty_1.set('fieldLabels', {'CMPTRL_CNT': 'hidden field', 'DPS_CNTY_N': 'hidden field', 'FIPS_ST_CN': 'hidden field', 'TXDOT_CNTY': 'hidden field', 'TXDOT_DIST': 'hidden field', 'CNTY_NM': 'hidden field', 'GID': 'hidden field', });
lyr_VanZandtCounty_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});