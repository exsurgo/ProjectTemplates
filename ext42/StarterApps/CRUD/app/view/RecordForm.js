/*
 * File: app/view/RecordForm.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
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

Ext.define('MyApp.view.RecordForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.recordform',

    height: 300,
    itemId: 'recordForm',
    width: 475,
    layout: {
        type: 'fit'
    },
    manageHeight: false,
    title: 'Edit Record',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            bodyStyle: {
                'background-color': '#fff'
            },
            items: [
                {
                    xtype: 'form',
                    border: 0,
                    itemId: 'form',
                    layout: {
                        type: 'auto'
                    },
                    bodyBorder: false,
                    bodyPadding: 10,
                    manageHeight: false,
                    title: '',
                    items: [
                        {
                            xtype: 'textfield',
                            margin: '0 0 10',
                            fieldLabel: 'Title',
                            labelAlign: 'right',
                            name: 'title',
                            validateBlank: true
                        },
                        {
                            xtype: 'textareafield',
                            margin: '0 0 10',
                            fieldLabel: 'Description',
                            labelAlign: 'right',
                            name: 'description',
                            cols: 45,
                            rows: 3
                        },
                        {
                            xtype: 'datefield',
                            margin: '0 0 10',
                            fieldLabel: 'Date',
                            labelAlign: 'right',
                            name: 'date'
                        },
                        {
                            xtype: 'checkboxfield',
                            fieldLabel: 'Is Featured',
                            labelAlign: 'right',
                            name: 'isFeatured',
                            boxLabel: ''
                        },
                        {
                            xtype: 'container',
                            padding: '10 10 10 10',
                            layout: {
                                align: 'middle',
                                pack: 'center',
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'saveButton',
                                    margin: '5 5 5 5 ',
                                    text: 'Save'
                                },
                                {
                                    xtype: 'button',
                                    id: 'cancelButton',
                                    margin: '5 5 5 5',
                                    text: 'Cancel'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});