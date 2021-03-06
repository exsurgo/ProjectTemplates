/*
 * File: app/view/CascadingSelectViewController.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
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

Ext.define('CascadingSelect.view.CascadingSelectViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.cascadingselect',

    onMakerFieldChange: function(field, newValue, oldValue, eOpts) {
        var refs = this.getReferences(),
            seriesField = refs.seriesField;

        // Special case: we chose the "choose a maker" option
        if (!newValue) {

            seriesField.hide();

        } else {


            // Clear selected series value
            seriesField.setValue('');


            // Update the series dropdown
            var data = this.getStore('cars').getValues('series', { maker: newValue }),
                store = new Ext.data.Store({
                    fields: ['id', 'value'],
                    data: data
                });
            seriesField.bindStore(store);

            // Show the series field
            seriesField.show();

        }

        // Hide later parts of the form
        refs.modelField.hide();
        refs.doneButton.hide();
    },

    onSeriesFieldChange: function(field, newValue, oldValue, eOpts) {
        var refs = this.getReferences(),
            modelField = refs.modelField,
            makerField = refs.makerField;

        // Special case: we chose the "choose a series" option
        if (!newValue) {

            modelField.hide();

        } else {

            // Clear selected model value
            modelField.setValue('');

            // Update the model dropdown
            var data = this.getStore('cars').getValues('model', { maker: makerField.getValue(), series: newValue }),
                store = new Ext.data.Store({
                    fields: ['id', 'value'],
                    data: data
                });
            modelField.bindStore(store);

            // Show the series field
            modelField.show();

        }

        // Hide later parts of the form
        refs.doneButton.hide();
    },

    onModelFieldChange: function(field, newValue, oldValue, eOpts) {
        var button = this.getReferences().doneButton;
        if (newValue) {
            button.show();
        } else {
            button.hide();
        }
    },

    onDoneButtonClick: function(button, e, eOpts) {
        var title = 'Car Selected',
            message = 'You chose a great car!';

        Ext.Msg.alert(title, message);
    },

    onFormRender: function(component, eOpts) {
        var refs = this.getReferences(),
            makerField = refs.makerField;

        // Populate the maker field
        var data = this.getStore('cars').getValues('maker'),
            store = new Ext.data.Store({
                fields: ['id', 'value'],
                data: data
            });
        makerField.bindStore(store);

        // Hide later parts of the form
        refs.seriesField.hide();
        refs.modelField.hide();
        refs.doneButton.hide();
    }

});
