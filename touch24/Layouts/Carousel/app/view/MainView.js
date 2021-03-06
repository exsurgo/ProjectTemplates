/*
 * File: app/view/MainView.js
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

Ext.define('MyApp.view.MainView', {
    extend: 'Ext.carousel.Carousel',
    alias: 'widget.mainview',

    requires: [
        'Ext.Panel',
        'Ext.Label',
        'Ext.Img'
    ],

    config: {
        itemId: 'mainView',
        items: [
            {
                xtype: 'panel',
                itemId: 'panel1',
                items: [
                    {
                        xtype: 'label',
                        centered: true,
                        html: 'Panel 1',
                        itemId: 'label1'
                    },
                    {
                        xtype: 'image',
                        height: 201,
                        itemId: 'image1',
                        src: 'resources/images/sencha.png'
                    }
                ]
            },
            {
                xtype: 'panel',
                itemId: 'panel2',
                items: [
                    {
                        xtype: 'label',
                        centered: true,
                        html: 'Panel 2',
                        itemId: 'label2'
                    },
                    {
                        xtype: 'image',
                        height: 201,
                        itemId: 'image2',
                        src: 'resources/images/sencha.png'
                    }
                ]
            },
            {
                xtype: 'panel',
                itemId: 'panel3',
                items: [
                    {
                        xtype: 'label',
                        centered: true,
                        html: 'Panel 3',
                        itemId: 'label3'
                    },
                    {
                        xtype: 'image',
                        height: 201,
                        itemId: 'image3',
                        src: 'resources/images/sencha.png'
                    }
                ]
            }
        ]
    }

});