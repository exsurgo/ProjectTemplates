/*
 * File: app/view/Step2Panel.js
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

Ext.define('MyApp.view.Step2Panel', {
    extend: 'Ext.Panel',
    alias: 'widget.step2',

    requires: [
        'MyApp.view.HelpButton'
    ],

    config: {
        items: [
            {
                xtype: 'button',
                id: 'step3button',
                ui: 'forward',
                text: 'Step 3'
            },
            {
                xtype: 'helpbutton'
            }
        ]
    }

});