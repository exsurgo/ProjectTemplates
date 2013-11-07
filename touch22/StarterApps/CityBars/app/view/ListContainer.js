/*
 * File: app/view/ListContainer.js
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

Ext.define('CityBars.view.ListContainer', {
    extend: 'Ext.Container',
    alias: 'widget.listcontainer',

    requires: [
        'Ext.XTemplate'
    ],

    config: {
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'list',
                id: 'dataList',
                itemTpl: [
                    '<div class="list-item">',
                    '    <img class="photo" src="{photo_url}" />',
                    '    <h1>{name}</h1>',
                    '    <img src="{rating_img_url_small}"/>&nbsp;<span>{address1}</span>',
                    '</div>'
                ]
            }
        ]
    }

});