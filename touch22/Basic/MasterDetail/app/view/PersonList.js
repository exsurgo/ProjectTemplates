/*
 * File: app/view/PersonList.js
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

Ext.define('MyApp.view.PersonList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.personlist',

    requires: [
        'Ext.XTemplate'
    ],

    config: {
        itemId: 'list',
        emptyText: 'No Matching Items',
        store: 'People',
        grouped: true,
        itemTpl: [
            '<div>{firstName} {lastName}</div>'
        ]
    }

});