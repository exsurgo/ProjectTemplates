/*
 * File: app/view/HtmlWindow.js
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

Ext.define('MyApp.view.HtmlWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.htmlwindow',

    requires: [
        'MyApp.view.HtmlWindowViewModel'
    ],

    viewModel: {
        type: 'htmlwindow'
    },
    height: 300,
    itemId: 'htmlWindow',
    width: 500,
    bodyPadding: 10,
    title: 'View HTML',
    modal: true

});