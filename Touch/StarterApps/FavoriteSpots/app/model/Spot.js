/*
 * File: app/model/Spot.js
 *
 * This file was generated by Sencha Architect version 2.3.0.
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

Ext.define('MyApp.model.Spot', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                allowNull: false,
                name: 'id',
                type: 'int'
            },
            {
                allowNull: false,
                name: 'name',
                type: 'string'
            },
            {
                name: 'description',
                type: 'string'
            },
            {
                allowNull: false,
                name: 'latitude',
                type: 'float'
            },
            {
                allowNull: false,
                name: 'longitude',
                type: 'float'
            }
        ]
    }
});