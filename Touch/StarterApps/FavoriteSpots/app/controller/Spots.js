/*
 * File: app/controller/Spots.js
 *
 * This file was generated by Sencha Architect version 2.3.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.Spots', {
    extend: 'Ext.app.Controller',

    config: {
        models: [
            'Spot'
        ],
        stores: [
            'Spots'
        ],

        refs: {
            mapView: {
                selector: 'mainview #map',
                xtype: 'Ext.Map'
            },
            mainView: {
                selector: 'mainview',
                xtype: 'Ext.navigation.View'
            },
            mapPanel: {
                selector: 'mainview #mapPanel',
                xtype: 'Ext.Panel'
            },
            addSpotButton: {
                selector: 'mainview #addSpotButton',
                xtype: 'Ext.Button'
            },
            listSpotsButton: {
                selector: 'mainview #listSpotsButton',
                xtype: 'Ext.Button'
            },
            newSpotMap: 'mainview #newSpotMap'
        },

        control: {
            "mainview #addSpotButton": {
                tap: 'onAddSpotTap'
            },
            "mainview #listPanel list": {
                disclose: 'onLocationTap'
            },
            "mainview #listSpotsButton": {
                tap: 'onListSpotsTap'
            },
            "mainview": {
                back: 'onBack',
                activate: 'onStart'
            },
            "mainview #locationTextField": {
                change: 'onNewSpotLocationChange'
            }
        }
    },

    onAddSpotTap: function(button, e, eOpts) {
        this.getMainView().push({
            xtype: 'formpanel',
            title: 'New favorite spot'
        });
        
        this.hideButtons();
    },

    onLocationTap: function(list, record, target, index, e, eOpts) {
        var latitude = record.get('latitude'),    // Build the location
            longitude = record.get('longitude'),
            location = new google.maps.LatLng(latitude, longitude),
            map = this.getMapView();              // Find the map
        
        map.setMapOptions({   // Move to the center
            center: location
        });
        
        this.showButtons();
        
        this.getMainView().pop();   // Remove the pin list panel
    },

    onListSpotsTap: function(button, e, eOpts) {
        this.getMainView().push({   // Show the list panel view
            xtype: 'listpanel',
            title: 'Pin list'
        });
        
        this.hideButtons();
    },

    onBack: function(navigationview, eOpts) {
        this.showButtons();
    },

    onStart: function(newActiveItem, container, oldActiveItem, eOpts) {
        this.showButtons();
    },

    onNewSpotLocationChange: function(textfield, newValue, oldValue, eOpts) {
        var geocoder = new google.maps.Geocoder,     // Prepare geocoder object
            geocodeOptions = { address: newValue },
            map = this.getNewSpotMap().getMap();     // Find the map
        
        // Build a marker if there isn't one
        if (!this.newSpotMapMarker) {
            this.newSpotMapMarker = new google.maps.Marker;
        }
        
        // Hide the map marker
        this.newSpotMapMarker.setMap(null);
        
        // Geocode the location
        var me = this;
        geocoder.geocode(geocodeOptions, function(results, status) {
        
            if (status == "OK") {
        
                // Get the position
                var position = results[0].geometry.location;
        
                // Move the map to the position
                map.setOptions({
                    center: position,
                    zoom: 15
                });
        
                // Drop the pin there
                me.newSpotMapMarker.setOptions({
                    map: map,
                    position: position,
                    animation: google.maps.Animation.DROP
                });
        
            }
        
        });
    },

    showButtons: function() {
        var spotCount = Ext.getStore('Spots').getCount(),
            hasSpots = spotCount != 0;
        
        this.getAddSpotButton().show();
        if (hasSpots) {
            this.getListSpotsButton().show();
        } else {
            this.getListSpotsButton().hide();
        }
    },

    hideButtons: function() {
        this.getAddSpotButton().hide();
        this.getListSpotsButton().hide();
    }

});