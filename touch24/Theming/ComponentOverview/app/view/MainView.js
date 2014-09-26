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

Ext.define('ComponentOverview.view.MainView', {
    extend: 'Ext.Container',
    alias: 'widget.mainview',

    requires: [
        'Ext.Toolbar',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.navigation.View',
        'Ext.navigation.Bar'
    ],

    config: {
        layout: 'hbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Component Overview'
            },
            {
                xtype: 'container',
                flex: 1,
                style: 'background-color: #ddf; border-right: 1px solid #ddd;',
                ui: 'dark',
                items: [
                    {
                        xtype: 'list',
                        data: [
                            {
                                title: 'Buttons',
                                view: 'Buttons'
                            },
                            {
                                title: 'Fields and Radios',
                                view: 'FieldsAndRadios'
                            },
                            {
                                title: 'Sliders',
                                view: 'Sliders'
                            },
                            {
                                title: 'Toolbars',
                                view: 'Toolbars'
                            },
                            {
                                title: 'List',
                                view: 'List'
                            },
                            {
                                title: 'Grouped List',
                                view: 'GroupedList'
                            },
                            {
                                title: 'Tabs',
                                view: 'Tabs'
                            },
                            {
                                title: 'Overlays',
                                view: 'Overlays'
                            }
                        ],
                        height: '100%',
                        itemId: 'navList',
                        itemTpl: [
                            '<div>{title}</div>'
                        ]
                    }
                ]
            },
            {
                xtype: 'navigationview',
                flex: 3,
                itemId: 'mainContent',
                layout: {
                    type: 'card',
                    animation: false,
                    'animation.direction': 'down'
                },
                navigationBar: {
                    docked: 'bottom',
                    hidden: true
                }
            }
        ]
    }

});