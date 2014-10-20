/*
 * File: app/view/CascadingSelectViewModel.js
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

Ext.define('CascadingSelect.view.CascadingSelectViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.cascadingselect',

    requires: [
        'Ext.data.Store'
    ],

    stores: {
        cars: {
            getValues: function(field, filter) {
                var values = [];
                values.push({ id: null, value: 'Select' });
                this.each(function(car) {
                    var val = car.get(field);
                    if (filter) {
                        for (var key in filter) {
                            if (car.get(key) != filter[key]) {
                                return;
                            }
                        }
                    }
                    values.push({ id: val, value: val });
                });
                return Ext.Array.unique(values);
            },
            model: 'CascadingSelect.model.Car',
            data: [
                {
                    maker: 'BWM',
                    series: '3 Series',
                    model: '328'
                },
                {
                    maker: 'BWM',
                    series: '3 Series',
                    model: '328i'
                },
                {
                    maker: 'BWM',
                    series: '5 Series',
                    model: '529'
                },
                {
                    maker: 'Atoyot',
                    series: 'Car-rolla',
                    model: 'Model L'
                },
                {
                    maker: 'Atoyot',
                    series: 'Car-rolla',
                    model: 'Model LE'
                },
                {
                    maker: 'Atoyot',
                    series: 'Car-rolla',
                    model: 'Model S'
                },
                {
                    maker: 'Atoyot',
                    series: 'Pre Us',
                    model: 'Two'
                },
                {
                    maker: 'Atoyot',
                    series: 'Pre Us',
                    model: 'Three'
                },
                {
                    maker: 'Atoyot',
                    series: 'Pre Us',
                    model: 'Four'
                },
                {
                    maker: 'Lodge',
                    series: 'Larger',
                    model: 'SXT'
                },
                {
                    maker: 'Lodge',
                    series: 'Larger',
                    model: 'SXT Plus'
                },
                {
                    maker: 'Lodge',
                    series: 'Larger',
                    model: 'SXT R/T'
                }
            ]
        }
    }

});