/*
 * File: app/controller/App.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
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

Ext.define('MyApp.controller.App', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainView: 'mainview'
        }
    },

    launch: function() {
        
        var store = Ext.getStore('Records'),	// Record store
        	mainView = this.getMainView();		// Main view
        
        // Loop through each category in the store
        store.each(function(category) {
        
            // Create a horizontal carousel
            var carousel = Ext.create('Ext.carousel.Carousel', {
                direction: 'horizontal',
                directionLock: true
            });
        
            // Loop through each value in the record
            Ext.each(category.get('values'), function(item) {
        
                // Create a new slide
                var slide = Ext.create('widget.slide');
        
                // Add an image
                slide.add({
                    xtype: 'image',
                    src: 'images/sencha.png'
                });
        
                // Add a label to the slide displaying the category and value
                slide.add({
                    xtype: 'label',
                    centered: true,
                    html: category.get('category') + " - " + item
                });
        
        
                // Add slide to horizontal carousel
                carousel.add(slide);
        
            });
        
            //  Add horizontal carousel to the main vertical carousel
            mainView.add(carousel);
        
        });
    }

});