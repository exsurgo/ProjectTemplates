/*
 * File: app/view/FormPanel.js
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

Ext.define('MyApp.view.FormPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formpanel',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.TextArea',
        'Ext.Button',
        'Ext.Map'
    ],

    config: {
        id: 'formPanel',
        scrollable: false,
        items: [
            {
                xtype: 'fieldset',
                itemId: 'formFieldSet',
                items: [
                    {
                        xtype: 'textfield',
                        itemId: 'nameTextField',
                        label: 'Name',
                        labelWrap: true,
                        name: 'name',
                        required: true,
                        autoCapitalize: true,
                        autoComplete: false,
                        autoCorrect: true,
                        placeHolder: 'My house'
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'locationTextField',
                        label: 'Location',
                        labelWrap: true,
                        name: 'location',
                        required: true,
                        placeHolder: '8 Fake Ave, Faketown, USA'
                    },
                    {
                        xtype: 'textareafield',
                        itemId: 'descriptionTextArea',
                        label: 'Description',
                        labelWrap: true,
                        name: 'description'
                    },
                    {
                        xtype: 'button',
                        itemId: 'saveLocationButton',
                        margin: 10,
                        text: 'Add location'
                    },
                    {
                        xtype: 'map',
                        height: 250,
                        itemId: 'newLocationMap'
                    }
                ]
            }
        ]
    }

});