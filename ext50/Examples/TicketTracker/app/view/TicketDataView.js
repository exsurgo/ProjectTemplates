/*
 * File: app/view/TicketDataView.js
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

Ext.define('TicketTracker.view.TicketDataView', {
    extend: 'Ext.view.View',
    alias: 'widget.ticketdataview',

    requires: [
        'TicketTracker.view.TicketDataViewViewModel',
        'Ext.XTemplate'
    ],

    viewModel: {
        type: 'ticketdataview'
    },
    height: 250,
    width: 400,
    emptyText: 'No records!',
    itemSelector: 'div.ticket-wrapper',
    itemTpl: [
        '<tpl for".">',
        '    <div class="ticket-wrapper">',
        '        <span class="title">{title} ({importance})</span>',
        '        <span class="description">{description}</span>',
        '        <span class="status {[values.status.toLowerCase().replace(" ", "-")]}">{status}</span>',
        '    </div>',
        '</tpl>'
    ],
    store: 'TicketStore'

});