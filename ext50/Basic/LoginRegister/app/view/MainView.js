/*
 * File: app/view/MainView.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.0.x. For more
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
        'MyApp.view.MainViewViewModel',
        'MyApp.view.MainViewViewController',
        'Ext.panel.Panel',
        'Ext.button.Button'
    ],

    controller: 'mainview',
    viewModel: {
        type: 'mainview'
    },
    itemId: 'mainView',
    layout: 'border',

    items: [
        {
            xtype: 'panel',
            region: 'north',
            height: 100,
            itemId: 'headerPanel',
            title: 'Header',
            dockedItems: [
                {
                    xtype: 'panel',
                    dock: 'right',
                    itemId: 'loginPanel',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'loginButton',
                            margin: 6,
                            text: 'Login'
                        },
                        {
                            xtype: 'button',
                            itemId: 'registerButton',
                            margin: 5,
                            text: 'Register'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    dock: 'right',
                    hidden: true,
                    itemId: 'logoutPanel',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'logoutButton',
                            margin: 6,
                            text: 'Logout'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'panel',
            region: 'center',
            itemId: 'contentPanel',
            title: 'Content'
        }
    ]

});