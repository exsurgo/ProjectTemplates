/*
 * File: app/controller/Business.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('CityBars.controller.Business', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            dataList: '#dataList',
            listCard: '#listCard',
            mainNav: 'mainnav',
            detailCard: 'detailpanel'
        },

        control: {
            "#dataList": {
                itemtap: 'onListItemTap'
            },
            "detailpanel #callButton": {
                tap: 'onCallButtonTap'
            },
            "detailpanel > map": {
                activate: 'onMapActivate'
            }
        }
    },

    onListItemTap: function(dataview, index, target, record, e, eOpts) {
        var map,
            info,
            details;

        if (record) {
            details = Ext.create('CityBars.view.DetailPanel', {
                title: 'Details'
            });

            // set the map
            map = details.child('#detailMap');
            map._record = record;

            // set the info
            info = details.child('#contact').child('#info');
            info.child('#photo').setData(record.data);
            info.child('#data').setData(record.data);

            this.getMainNav().push(details);
        }
    },

    onCallButtonTap: function(button, e, eOpts) {

        // TODO: Add custom phone call code here
        window.location = 'tel:555-555-5555';

    },

    onMapActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        var map = newActiveItem,
            record = map._record,
            lat = record.get('latitude'),
            lng = record.get('longitude'),
            centerMap = Ext.Function.createDelayed(function() {
                map.setMapOptions({
                    zoom: 18
                });
                map.setMapCenter({
                    latitude: lat,
                    longitude: lng
                });
            }, 250),
            geocoder, loc;

        if (lat && lng) {
            centerMap();
        } else {
            geocoder = this._geocoder || (this._geocoder = new google.maps.Geocoder());
            geocoder.geocode(
            {address: [
                record.get('address1'),
                record.get('address2'),
                record.get('address3'),
                record.get('city'),
                record.get('state_code'),
                record.get('zip')
            ].join(', ')},
            function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    loc = results[0].geometry.location;
                    lat = loc.lat();
                    lng = loc.lng();
                    record.set('latitude', lat);
                    record.set('longitude', lng);
                    centerMap();
                } else {
                    Ext.Msg.alert("Could not find location: " + status);
                }
            }
            );
        }

    },

    launch: function() {

        var me = this;

        // NOTE ABOUT YELP KEY
        // You must use your own yelp key, available by registering (for free) with Yelp:
        // http://www.yelp.com/developers/getting_started/api_overview
        // (in this app, we use the Review Search API v1.0)
        me.apiKey = '8UUJ-jfiOwttLyzTC56F6A'; // enter your own yelp key here

        // Get the location, then find businesses
        Ext.Viewport.setMasked({ xtype: 'loadmask', message: 'Loading...' });
        me.getLocation(function (location) {

            // then use Yelp to get the businesses
            me.getBusinesses(location, function (store) {

                // then bind data to list and show it
                me.getDataList().setStore(store);

                Ext.Viewport.setMasked(false);

            });

        });

    },

    getLocation: function(callback) {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                callback(position);
            }, function(error) {
                // give a warning for error
            });
        }
    },

    getBusinesses: function(location, callback) {

        var store = Ext.data.StoreManager.lookup('BusinessStore'),
            url = 'http://api.yelp.com/business_review_search' +
            '?ywsid=' + this.apiKey +
            '&term=Bars' +
            '&lat=' + location.coords.latitude +
            '&long=' + location.coords.longitude;
        store.getProxy().setUrl(url);
        store.load(function() {
            callback(store);
        });

    }

});