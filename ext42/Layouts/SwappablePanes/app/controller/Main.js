/*
 * File: app/controller/Main.js
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

Ext.define('MyApp.controller.Main', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'previewPane',
            selector: 'panel#previewPane'
        },
        {
            ref: 'mainRegion',
            selector: 'panel#mainRegion'
        },
        {
            ref: 'previewButton',
            selector: 'splitbutton#previewButton'
        }
    ],

    init: function(application) {
        this.control({
            "menuitem[opt]": {
                click: this.setPreviewRegion
            }
        });
    },

    setPreviewRegion: function(item) {
        var me = this,
            mainRegion = me.getMainRegion(),
            previewPane = me.getPreviewPane(),
            previewButton = me.getPreviewButton(),
            previewText = 'Preview: ' + item.text;

        //evalute the items custom "opt" property to dictate
        //the preview pane view state.
        if (item.opt !== 'hide') {
            if (previewPane.isHidden()) {
        		previewPane.show();
            }
            //remove the preview pane from the main region
            //without destroying it
            mainRegion.remove(previewPane, false);
            //assign the new region to the preview pane
            previewPane.region = item.opt;
            //add the preview pane back to the main region
            mainRegion.add(previewPane);
        } else {
            if (!previewPane.isHidden()) {
        		previewPane.hide();
            }
        }

        previewButton.setText(previewText);
    }

});
