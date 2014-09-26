/*
 * File: app/controller/MainView.js
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

Ext.define('ComponentOverview.controller.MainView', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            navList: 'list#navList',
            mainContent: 'navigationview#mainContent'
        },

        control: {
            "list#navList": {
                itemtap: 'onListItemTap'
            }
        }
    },

    onListItemTap: function(dataview, index, target, record, e, eOpts) {
        var view = record.get('view');

        if (this.viewList.indexOf(view) < 0) {
            this.viewList[view] = Ext.create('ComponentOverview.view.' + view);
        }

        this.getMainContent().push(this.viewList[view]);

    },

    launch: function() {
        this.viewList = [];
        this.viewList.Buttons = Ext.create('ComponentOverview.view.Buttons');
        this.getMainContent().push(this.viewList.Buttons);
        this.getNavList().select(0);
    }

});