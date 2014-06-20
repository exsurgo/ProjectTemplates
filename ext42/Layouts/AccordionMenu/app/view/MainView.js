/*
 * File: app/view/MainView.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MainView', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.menu.Menu',
        'Ext.menu.Item'
    ],

    itemId: 'mainView',
    layout: 'border',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    region: 'north',
                    height: 100,
                    itemId: 'headerPanel',
                    title: 'Header'
                },
                {
                    xtype: 'panel',
                    region: 'west',
                    split: true,
                    itemId: 'menuPanel',
                    width: 250,
                    layout: 'accordion',
                    collapseDirection: 'left',
                    title: 'Menu',
                    items: [
                        {
                            xtype: 'panel',
                            title: 'Group 1',
                            items: [
                                {
                                    xtype: 'menu',
                                    floating: false,
                                    itemId: 'menu1',
                                    items: [
                                        {
                                            xtype: 'menuitem',
                                            text: 'Menu Item'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            text: 'Menu Item'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            text: 'Menu Item'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            title: 'Group 2',
                            items: [
                                {
                                    xtype: 'menu',
                                    floating: false,
                                    itemId: 'menu2',
                                    items: [
                                        {
                                            xtype: 'menuitem',
                                            text: 'Menu Item'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            text: 'Menu Item'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            text: 'Menu Item'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            title: 'Group 3',
                            items: [
                                {
                                    xtype: 'menu',
                                    floating: false,
                                    itemId: 'menu3',
                                    items: [
                                        {
                                            xtype: 'menuitem',
                                            text: 'Menu Item'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            text: 'Menu Item'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            text: 'Menu Item'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    flex: 1,
                    region: 'center',
                    itemId: 'contentPanel',
                    title: 'Content'
                }
            ]
        });

        me.callParent(arguments);
    }

});