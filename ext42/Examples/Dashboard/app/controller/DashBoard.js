/*
 * File: app/controller/DashBoard.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
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

Ext.define('MyApp.controller.DashBoard', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'companyForm',
            selector: '#companyForm'
        },
        {
            ref: 'companyChart',
            selector: '#companyChart'
        }
    ],

    onGridpanelSelectionChange: function(model, selected, eOpts) {
        selected = selected[0];
        if (selected) {

            // get form and fields
            var form = this.getCompanyForm().getForm();
                fields = form.getFields();

            // diable fields
            fields.each(function(field){
                if (field.name != 'company') {
                    field.setDisabled(false);
                }
            });

            // prevent change events from firing
            form.suspendEvents();
            form.loadRecord(selected);
            form.resumeEvents();

            // highlight items
            this.highlightCompany(selected);

            // update radar
            this.updateRadarChart(selected);

        }
    },

    highlightCompany: function(selectedItem) {
        var name = selectedItem.get('company'),
            series = this.getCompanyChart().series.get(0),
            items = series.items;

        series.highlight = true;
        series.unHighlightItem();
        series.cleanHighlights();

        items.forEach(function(item) {
            if (name == item.storeItem.get('company')) {
                series.highlightItem(item);
            }
        });

        series.highlight = false;
    },

    updateRadarChart: function(record) {
        Ext.getStore('Radar').loadData(
            [
                {
                    'Name': 'Price',
                    'Data': record.get('price')
                },
                {
                    'Name': 'Revenue %',
                    'Data': record.get('revenue')
                },
                {
                    'Name': 'Growth %',
                    'Data': record.get('growth')
                },
                {
                    'Name': 'Product %',
                    'Data': record.get('product')
                },
                {
                    'Name': 'Market %',
                    'Data': record.get('market')
                }
            ]
        );
    },

    init: function(application) {
        this.control({
            "#companyGrid": {
                selectionchange: this.onGridpanelSelectionChange
            }
        });
    }

});