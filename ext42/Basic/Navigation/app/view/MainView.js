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
    alias: 'widget.mainview',

    requires: [
        'Ext.menu.Menu',
        'Ext.menu.Item',
        'Ext.form.Label'
    ],

    itemId: 'mainView',
    layout: 'border',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    region: 'west',
                    split: true,
                    itemId: 'menuPanel',
                    width: 150,
                    title: 'Menu',
                    items: [
                        {
                            xtype: 'menu',
                            floating: false,
                            itemId: 'menu',
                            items: [
                                {
                                    xtype: 'menuitem',
                                    itemId: 'home',
                                    text: 'Home'
                                },
                                {
                                    xtype: 'menuitem',
                                    itemId: 'about',
                                    text: 'About Us'
                                },
                                {
                                    xtype: 'menuitem',
                                    itemId: 'contact',
                                    text: 'Contact us'
                                }
                            ],
                            listeners: {
                                click: {
                                    fn: me.onMenuClick,
                                    scope: me
                                }
                            }
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'center',
                    itemId: 'contentPanel',
                    layout: 'card',
                    items: [
                        {
                            xtype: 'panel',
                            itemId: 'homePanel',
                            title: 'Home',
                            layout: {
                                type: 'vbox',
                                align: 'center',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'label',
                                    text: 'Home View'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            itemId: 'aboutPanel',
                            title: 'About Us',
                            layout: {
                                type: 'vbox',
                                align: 'center',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'label',
                                    text: 'About Us View'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            itemId: 'contactPanel',
                            title: 'Contact Us',
                            layout: {
                                type: 'vbox',
                                align: 'center',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'label',
                                    text: 'Contact Us View'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onMenuClick: function(menu, item, e, eOpts) {
        location.hash = item.itemId;
    }

});