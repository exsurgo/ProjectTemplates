/*
 * File: app/store/TicketStore.js
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

Ext.define('TicketTracker.store.TicketStore', {
    extend: 'Ext.data.Store',
    alias: 'store.ticketstore',

    requires: [
        'TicketTracker.model.Ticket'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'TicketTracker.model.Ticket',
            storeId: 'MyStore',
            data: [
                {
                    title: 'Improve Css',
                    status: 'Open',
                    description: 'improve site css',
                    importance: 3
                },
                {
                    title: 'PHP scripting',
                    status: 'Open',
                    description: 'Perform some PHP scripting',
                    importance: 4
                },
                {
                    title: 'PHP Bug',
                    status: 'In Progress',
                    description: 'remove PHP Bug',
                    importance: 4
                }
            ]
        }, cfg)]);
    }
});