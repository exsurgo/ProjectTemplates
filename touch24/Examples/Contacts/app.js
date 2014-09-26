/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({

    requires: [
        'Ext.MessageBox',
        'Ext.device.Camera'
    ],
    models: [
        'Contact'
    ],
    stores: [
        'ContactStore'
    ],
    views: [
        'Main',
        'Info',
        'Form',
        'Picture',
        'List',
        'FavoriteView'
    ],
    controllers: [
        'Contacts'
    ],
    name: 'Contact',

    launch: function() {
        Ext.util.Format.empty = function(value, defaultValue) {
            return !Ext.isEmpty(value) ? value : defaultValue;
        };
        Ext.util.Format.undef = function(value, defaultValue) {
            return Ext.isDefined(value) ? value : defaultValue;
        };
        var ds = Ext.StoreMgr.lookup('ContactStore');
        if (!ds.getCount()) {
            Ext.Msg.alert('Intro', 'Setting up default database.');
            ds.add({
                firstName: 'Aaron',
                lastName: 'Conran',
                emailAddress: 'aaron@sencha.com',
                phoneNumber: '443-555-1234'
            });
            ds.add({
                firstName: 'Aditya',
                lastName: 'Bansod',
                phoneNumber: '555-555-1234'
            });
            ds.add({
                firstName: 'Luca',
                lastName: 'Candela',
                phoneNumber: '555-555-1234'
            });
            ds.add({
                firstName: 'Tommy',
                lastName: 'Maintz',
                isFavorite: true,
                phoneNumber: '717-555-1234'
            });
            ds.add({
                firstName: 'Nige',
                lastName: '(Animal) White',
                isFavorite: true,
                phoneNumber: '555-555-1234'
            });
        }
        Ext.create('Contact.view.Main', {fullscreen: true});
    }

});
