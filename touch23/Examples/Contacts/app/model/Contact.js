/*
 * File: app/model/Contact.js
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

Ext.define('Contact.model.Contact', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            {
                name: 'firstName',
                type: 'string'
            },
            {
                name: 'lastName',
                type: 'string'
            },
            {
                name: 'phoneNumber',
                type: 'string'
            },
            {
                name: 'emailAddress',
                type: 'string'
            },
            {
                name: 'address',
                type: 'string'
            },
            {
                name: 'city',
                type: 'string'
            },
            {
                name: 'state',
                type: 'string'
            },
            {
                name: 'zipcode',
                type: 'string'
            },
            {
                defaultValue: 'resources/img/defaultContactPic.png',
                name: 'picture'
            },
            {
                name: 'isFavorite',
                type: 'boolean'
            }
        ]
    }
});