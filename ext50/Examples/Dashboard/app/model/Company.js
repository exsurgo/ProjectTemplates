/*
 * File: app/model/Company.js
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

Ext.define('MyApp.model.Company', {
    extend: 'Ext.data.Model',
    alias: 'model.company',

    requires: [
        'Ext.data.field.Field'
    ],

    fields: [
        {
            name: 'company'
        },
        {
            name: 'price',
            type: 'float'
        },
        {
            name: 'revenue',
            type: 'float'
        },
        {
            name: 'growth',
            type: 'float'
        },
        {
            name: 'product',
            type: 'float'
        },
        {
            name: 'market',
            type: 'float'
        }
    ]
});