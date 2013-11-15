/*
 * File: app/view/Picture.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
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

Ext.define('Contact.view.Picture', {
    extend: 'Ext.Container',
    alias: 'widget.contactpic',

    requires: [
        'Ext.XTemplate'
    ],

    config: {
        overflow: 'hidden',
        height: 120,
        minHeight: 100,
        style: 'overflow: hidden',
        ui: '',
        layout: {
            align: 'center',
            type: 'vbox'
        },
        tpl: [
            '<img src="{picture}" width="160" />'
        ],
        items: [
            {
                xtype: 'component',
                html: ''
            },
            {
                xtype: 'button',
                bottom: 5,
                itemId: 'mybutton',
                right: 5,
                iconCls: 'add'
            }
        ],
        listeners: [
            {
                fn: 'onMybuttonTap',
                event: 'tap',
                delegate: '#mybutton'
            }
        ]
    },

    onMybuttonTap: function(button, e, eOpts) {
        Ext.device.Camera.capture({
            source: 'camera',
            destination: 'file',

            success: function(url) {
                this.fireEvent('change', this, url);
            },
            failure: function() {
                Ext.Msg.alert('Error', 'There was an error when acquiring the picture.');
            },
            scope: this
        });
    }

});