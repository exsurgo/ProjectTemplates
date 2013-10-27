/*
 * File: app/store/Records.js
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

Ext.define('MyApp.store.Records', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'Records',
            data: [
                {
                    id: 1,
                    title: 'פריט 1',
                    date: '10/1/2013',
                    boolean: 'נכון'
                },
                {
                    id: 2,
                    title: 'פריט 2',
                    date: '10/2/2013',
                    boolean: 'שקר'
                },
                {
                    id: 3,
                    title: 'פריט 3',
                    date: '10-3-2010',
                    boolean: 'נכון'
                },
                {
                    id: 4,
                    title: 'פריט 4',
                    date: '10/4/2013',
                    boolean: 'נכון'
                },
                {
                    id: 5,
                    title: 'פריט 5',
                    date: '10/1/2013',
                    boolean: 'שקר'
                }
            ],
            fields: [
                {
                    name: 'id'
                },
                {
                    name: 'title'
                },
                {
                    name: 'date'
                },
                {
                    name: 'boolean'
                }
            ]
        }, cfg)]);
    }
});