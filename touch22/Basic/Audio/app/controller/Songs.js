/*
 * File: app/controller/Songs.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
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

Ext.define('MyApp.controller.Songs', {
    extend: 'Ext.app.Controller',

    config: {
        models: [
            'Song'
        ],
        stores: [
            'Songs'
        ],

        refs: {
            mainView: 'mainview'
        },

        control: {
            "mainview #list": {
                select: 'view'
            }
        }
    },

    view: function(dataview, record, eOpts) {

        // Main navigation view
        var mainView = this.getMainView();

        // Navigate to details
        var panel = mainView.push({
            xtype: 'detailpanel',
            title: '"' + record.data.name + '"',
            data: record.data,
            bodyPadding: 10,
            items: [
                {
                    xtype: 'panel',
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'audio',
                            url: 'resources/songs/crash.mp3',
                            loop: true,
                            autoResume: true
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    centered: true,
                    items: [
                        {
                            xtype: 'image',
                            src: 'resources/images/cover.png',
                            width: 250,
                            height: 250
                        }
                    ]
                }
            ]
        });




    }

});