/*
 * File: app/controller/MainNavController.js
 *
 * This file was generated by Sencha Architect version 2.3.0.
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

Ext.define('MyApp.controller.MainNavController', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "helpbutton": {
                tap: 'onHelpTap'
            },
            "button#step2button": {
                tap: 'onClickStep2'
            },
            "button#step3button": {
                tap: 'onClickStep3'
            }
        }
    },

    onHelpTap: function(button, e, eOpts) {
        button.up('navigationview').push({
            xtype: 'help',
            title: 'Help'
        });
    },

    onClickStep2: function(button, e, eOpts) {
        button.up('navigationview').push({
            xtype: 'step2',
            title: 'Step 2'
        });
    },

    onClickStep3: function(button, e, eOpts) {
        button.up('navigationview').push({
            xtype: 'step3',
            title: 'Step 3'
        });
    }

});