/*
 * File: app/view/RegisterForm.js
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

Ext.define('MyApp.view.RegisterForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.registerform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Email',
        'Ext.field.Password',
        'Ext.Button'
    ],

    config: {
        items: [
            {
                xtype: 'fieldset',
                title: 'Register',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Name',
                        labelWidth: '40%',
                        name: 'name'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Username',
                        labelWidth: '40%',
                        name: 'username'
                    },
                    {
                        xtype: 'emailfield',
                        label: 'Email',
                        labelWidth: '40%',
                        name: 'email',
                        placeHolder: 'email@example.com'
                    },
                    {
                        xtype: 'passwordfield',
                        label: 'Password',
                        labelWidth: '40%',
                        name: 'password'
                    }
                ]
            },
            {
                xtype: 'button',
                itemId: 'registerButton',
                margin: 20,
                padding: 8,
                text: 'Register'
            }
        ]
    }

});