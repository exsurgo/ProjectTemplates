/*
 * File: app/store/MyTreeStore.js
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

Ext.define('ViewOverviewExtJS.store.MyTreeStore', {
    extend: 'Ext.data.TreeStore',

    requires: [
        'ViewOverviewExtJS.model.treeModel'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'MyTreeStore',
            model: 'ViewOverviewExtJS.model.treeModel',
            root: {
                expanded: true,
                children: [
                    {
                        text: 'Trees',
                        leaf: false,
                        expanded: true,
                        children: [
                            {
                                text: 'Oak',
                                leaf: true
                            },
                            {
                                text: 'Pine',
                                leaf: true
                            }
                        ]
                    }
                ]
            }
        }, cfg)]);
    }
});