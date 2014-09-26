/*
 * File: app/view/Overlays.js
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

Ext.define('ComponentOverview.view.Overlays', {
    extend: 'Ext.Container',

    requires: [
        'Ext.Button'
    ],

    config: {
        layout: {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        },
        items: [
            {
                xtype: 'button',
                centered: false,
                itemId: 'ActionSheet',
                margin: '0 0 1em 0',
                width: 200,
                text: 'Action Sheet'
            },
            {
                xtype: 'button',
                centered: false,
                itemId: 'Overlay',
                margin: '0 0 1em 0',
                width: 200,
                text: 'Overlay'
            },
            {
                xtype: 'button',
                centered: false,
                itemId: 'Alert',
                margin: '0 0 1em 0',
                width: 200,
                text: 'Alert'
            },
            {
                xtype: 'button',
                centered: false,
                itemId: 'Prompt',
                margin: '0 0 1em 0',
                width: 200,
                text: 'Prompt'
            },
            {
                xtype: 'button',
                centered: false,
                itemId: 'Confirm',
                margin: '0 0 1em 0',
                width: 200,
                text: 'Confirm'
            },
            {
                xtype: 'button',
                centered: false,
                itemId: 'Picker',
                margin: '0 0 1em 0',
                width: 200,
                text: 'Picker'
            }
        ],
        listeners: [
            {
                fn: 'onActionSheetTap',
                event: 'tap',
                delegate: '#ActionSheet'
            },
            {
                fn: 'onOverlayTap',
                event: 'tap',
                delegate: '#Overlay'
            },
            {
                fn: 'onAlertTap',
                event: 'tap',
                delegate: '#Alert'
            },
            {
                fn: 'onPromptTap',
                event: 'tap',
                delegate: '#Prompt'
            },
            {
                fn: 'onConfirmTap',
                event: 'tap',
                delegate: '#Confirm'
            },
            {
                fn: 'onPickerTap',
                event: 'tap',
                delegate: '#Picker'
            }
        ]
    },

    onActionSheetTap: function(button, e, eOpts) {
        var actionSheet;

        if (!actionSheet) {
            actionSheet = Ext.create('Ext.ActionSheet', {
                items: [
                    {
                        text: 'Save',
                        ui: 'confirm',
                        handler: function() {
                            actionSheet.hide();
                        }
                    },
                    {
                        text: 'Delete',
                        ui  : 'decline',
                        handler: function() {
                            actionSheet.hide();
                        }
                    },
                    {
                        text: 'Info',
                        ui: 'action',
                        handler: function() {
                            actionSheet.hide();
                        }
                    },
                    {
                        text: 'Cancel',
                        handler: function() {
                            actionSheet.hide();
                        }
                    }
                ]
            });
            Ext.Viewport.add(actionSheet);
        }

        actionSheet.show();
    },

    onOverlayTap: function(button, e, eOpts) {
        var overlay;

        if (!overlay) {

            overlay = Ext.create('Ext.Panel', {

                left: 0,
                top: 0,

                modal: true,
                hideOnMaskTap: true,

                hidden: true,

                width: 300,
                height: 300,

                showAnimation: 'fade',
                hideAnimation: 'fadeOut',

                html: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec dui interdum, luctus velit et, fringilla nulla. Praesent mi orci, cursus a ante eget, imperdiet ultricies justo. Nunc dolor dui, fringilla ut congue in, malesuada id dolor. Proin quis convallis tortor. In libero lectus, mollis eleifend risus id, imperdiet molestie lacus. Praesent sodales augue mollis nisl egestas gravida. Sed vel dui semper arcu sagittis imperdiet ullamcorper et nunc. Phasellus blandit arcu sit amet congue suscipit. Etiam diam elit, porttitor nec nunc eu, volutpat cursus ligula. Donec vel felis magna.",

                styleHtmlContent: true,
                scrollable: true,

                items: [{
                    docked: 'top',
                    xtype: 'toolbar',
                    title: 'Overlay'
                }]
            });
            Ext.Viewport.add(overlay);
        }
        overlay.showBy(button);
    },

    onAlertTap: function(button, e, eOpts) {

        Ext.Msg.alert('Alert', 'You clicked alert!', Ext.emptyFn);
    },

    onPromptTap: function(button, e, eOpts) {

        Ext.Msg.prompt('Enter Data', 'Some data is required.', Ext.emptyFn);
    },

    onConfirmTap: function(button, e, eOpts) {

        Ext.Msg.confirm('Confirm your click', 'Are you sure?', Ext.emptyFn);
    },

    onPickerTap: function(button, e, eOpts) {
        var picker;

        if (!picker) {
            picker = Ext.create('Ext.Picker', {
                slots: [
                    {
                        name: 'day',
                        title: 'Day',
                        data: [
                            { text: 'Monday', value: 'monday' },
                            { text: 'Tuesday', value: 'tuesday' },
                            { text: 'Wednesday', value: 'wednesday' },
                            { text: 'Thursday', value: 'thursday' },
                            { text: 'Friday', value: 'friday' },
                            { text: 'Saturday', value: 'saturday' },
                            { text: 'Sunday', value: 'sunday' }
                        ]
                    }, {
                        name: 'month',
                        title: 'Month',
                        data: [
                            { text: 'January', value: 'january' },
                            { text: 'February', value: 'february' },
                            { text: 'March', value: 'march' },
                            { text: 'April', value: 'april' },
                            { text: 'May', value: 'may' },
                            { text: 'June', value: 'june' },
                            { text: 'July', value: 'july' },
                            { text: 'August', value: 'august' },
                            { text: 'September', value: 'september' },
                            { text: 'October', value: 'october' },
                            { text: 'November', value: 'november' },
                            { text: 'December', value: 'december' }
                        ]
                    }
                ]
            });
            Ext.Viewport.add(picker);
        }

        picker.show();
    }

});