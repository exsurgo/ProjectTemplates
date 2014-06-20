/*
 * File: app/view/RegisterForm.js
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

Ext.define('MyApp.view.RegisterForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.registerform',

    requires: [
        'MyApp.view.RegisterFormViewModel',
        'MyApp.view.RegisterFormViewController',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.button.Button'
    ],

    controller: 'registerform',
    viewModel: {
        type: 'registerform'
    },
    height: 250,
    itemId: 'registerForm',
    width: 400,
    title: 'Register',
    modal: true,

    items: [
        {
            xtype: 'form',
            itemId: 'form',
            bodyPadding: 10,
            items: [
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    margin: '0 0 10 0',
                    fieldLabel: 'Name',
                    labelAlign: 'right',
                    msgTarget: 'title',
                    name: 'name',
                    allowBlank: false,
                    blankText: 'Enter your full name.'
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    margin: '0 0 10 0',
                    fieldLabel: 'Email',
                    labelAlign: 'right',
                    msgTarget: 'title',
                    name: 'email',
                    allowBlank: false,
                    blankText: 'Enter your email.'
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    margin: '0 0 10 0',
                    fieldLabel: 'Username',
                    labelAlign: 'right',
                    msgTarget: 'title',
                    name: 'username',
                    allowBlank: false,
                    blankText: 'Choose a password.'
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    margin: '0 0 10 0',
                    fieldLabel: 'Password',
                    labelAlign: 'right',
                    msgTarget: 'title',
                    name: 'password',
                    allowBlank: false,
                    blankText: 'Choose a password.'
                },
                {
                    xtype: 'button',
                    formBind: true,
                    itemId: 'registerButton',
                    scale: 'medium',
                    text: 'Register'
                }
            ]
        }
    ]

});