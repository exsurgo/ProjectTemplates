/*
 * File: app/controller/Account.js
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

Ext.define('MyApp.controller.Account', {
    extend: 'Ext.app.Controller',

    refs: {
        loginPanel: 'mainview #loginPanel',
        logoutPanel: 'mainview #logoutPanel'
    },

    control: {
        "mainview #loginButton": {
            click: 'showLogin'
        },
        "loginform #loginButton": {
            click: 'doLogin'
        },
        "mainview #registerButton": {
            click: 'showRegister'
        },
        "registerform #registerButton": {
            click: 'doRegister'
        }
    },

    showLogin: function(target) {

        // Create new login form window
        var login = Ext.create("widget.loginform");

        // Show window
        login.show();

    },

    doLogin: function(button, e, eOpts) {

        var form = button.up('form'),				// Login form
            formWindow = button.up('window'),		// Login form window
            values = form.getValues(),				// Form values
            loginPanel = this.getLoginPanel(),		// Panel shown when logged out
            logoutPanel = this.getLogoutPanel();	// Panel shown when logged in

        // Success
        var successCallback = function(resp, ops) {

            // Hide login panel
            loginPanel.hide();

            // Show logout panel
            logoutPanel.show();

        	// Close window
            formWindow.destroy();

        };

        // Failure
        var failureCallback = function(resp, ops) {

            // Show login failure error
            Ext.Msg.alert("Login Failure", resp);

        };


        // TODO: Login using server-side authentication service
        // Ext.Ajax.request({
        //		url: "/login",
        //		params: values,
        //		success: successCallback,
        //		failure: failureCallback
        // });

        // Just run success for now
        successCallback();
    },

    showRegister: function(target) {

        // Create new register form window
        var register = Ext.create("widget.registerform");

        // Show window
        register.show();

    },

    doRegister: function(button, e, eOpts) {

        var form = button.up('form'),				// Register form
            formWindow = button.up('window'),		// Register form window
            values = form.getValues(),				// Form values
            loginPanel = this.getLoginPanel(),		// Panel shown when logged out
            logoutPanel = this.getLogoutPanel();	// Panel shown when logged in

        // Success
        var successCallback = function(resp, ops) {

            // Hide login panel
            loginPanel.hide();

            // Show logout panel
            logoutPanel.show();

        	// Close window
            formWindow.destroy();

        };

        // Failure
        var failureCallback = function(resp, ops) {

            // Show registration failure error
            Ext.Msg.alert("Registration Failure", resp);

        };


        // TODO: Register using server-side registration service
        // Ext.Ajax.request({
        //		url: "/register",
        //		params: values,
        //		success: successCallback,
        //		failure: failureCallback
        // });

        // Just run success for now
        successCallback();

    }

});
