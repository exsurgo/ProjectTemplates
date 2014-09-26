/*
 * File: app/view/FavoriteView.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Contact.view.FavoriteView', {
    extend: 'Ext.dataview.DataView',
    alias: 'widget.favoriteview',

    requires: [
        'Ext.XTemplate'
    ],

    config: {
        emptyText: 'No Favorite Contacts',
        inline: true,
        store: 'ContactStore',
        itemTpl: [
            '<div class="favorite">',
            '    <img src="{picture:empty("resources/img/defaultContactPic.png")}" width="160" />',
            '    <div>{firstName} {lastName}</div>',
            '</div>'
        ]
    }

});