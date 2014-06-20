/*
 * File: app/view/MainView.js
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

Ext.define('MyApp.view.MainView', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.chart.Chart',
        'Ext.util.Point',
        'Ext.chart.axis.Category',
        'Ext.chart.series.Column',
        'Ext.grid.Panel',
        'Ext.grid.column.Number',
        'Ext.form.Panel',
        'Ext.chart.series.Radar',
        'Ext.chart.axis.Radial',
        'Ext.form.FieldSet',
        'Ext.form.field.Number'
    ],

    itemId: 'mainView',
    layout: 'border',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    region: 'north',
                    split: true,
                    height: 200,
                    itemId: 'headerPanel',
                    layout: 'fit',
                    collapsible: true,
                    title: 'Dashboard',
                    items: [
                        {
                            xtype: 'chart',
                            itemId: 'companyChart',
                            width: 400,
                            animate: true,
                            insetPadding: 5,
                            store: 'Companies',
                            axes: [
                                {
                                    type: 'Numeric',
                                    fields: [
                                        'price'
                                    ],
                                    hidden: true,
                                    title: 'Numeric Axis',
                                    minimum: 0,
                                    position: 'left'
                                },
                                {
                                    type: 'Category',
                                    fields: [
                                        'company'
                                    ],
                                    label: {
                                        renderer: function(v) {
                                            return Ext.String.ellipsis(v, 15, false);
                                        },
                                        font: '9px Arial',
                                        rotate: {
                                            degrees: 270
                                        }
                                    },
                                    position: 'bottom'
                                }
                            ],
                            series: [
                                {
                                    type: 'column',
                                    highlight: {
                                        fill: '#a2b5ca'
                                    },
                                    label: {
                                        contrast: true,
                                        display: 'insideEnd',
                                        field: 'price',
                                        color: '#000',
                                        orientation: 'vertical',
                                        'text-anchor': 'middle'
                                    },
                                    axis: 'left',
                                    xField: 'name',
                                    yField: 'price',
                                    style: {
                                        fill: '#a2b5ca'
                                    },
                                    listeners: {
                                        itemmouseup: {
                                            fn: me.onColumnItemMouseUp,
                                            scope: me
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    flex: 1,
                    region: 'west',
                    split: true,
                    itemId: 'leftPanel',
                    width: 150,
                    layout: 'fit',
                    collapseDirection: 'left',
                    collapsible: true,
                    title: 'Company Data',
                    items: [
                        {
                            xtype: 'gridpanel',
                            itemId: 'companyGrid',
                            rowLines: false,
                            store: 'Companies',
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    width: 140,
                                    dataIndex: 'company',
                                    text: 'Company'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    dataIndex: 'price',
                                    text: 'Price'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    dataIndex: 'revenue',
                                    text: 'Revenue'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    dataIndex: 'growth',
                                    text: 'Growth'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    dataIndex: 'product',
                                    text: 'Product'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    dataIndex: 'market',
                                    text: 'Market'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    flex: 1,
                    region: 'center',
                    split: true,
                    itemId: 'rightPanel',
                    bodyPadding: 5,
                    collapseDirection: 'right',
                    collapsible: true,
                    title: 'Company Details',
                    items: [
                        {
                            xtype: 'form',
                            itemId: 'companyForm',
                            bodyPadding: 10,
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'chart',
                                    flex: 1.2,
                                    height: 250,
                                    width: 400,
                                    animate: true,
                                    insetPadding: 20,
                                    store: 'Radar',
                                    theme: 'Blue',
                                    series: [
                                        {
                                            type: 'radar',
                                            markerConfig: {
                                                radius: 4,
                                                size: 4,
                                                fill: 'rgb(69,109,159)'
                                            },
                                            showMarkers: true,
                                            style: {
                                                fill: 'rgb(194,214,240)',
                                                opacity: 0.5,
                                                'stroke-width': 0.5
                                            },
                                            xField: 'Name',
                                            yField: 'Data'
                                        }
                                    ],
                                    axes: [
                                        {
                                            type: 'Radial',
                                            maximum: 100,
                                            steps: 5,
                                            position: 'radial'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    flex: 1,
                                    defaults: {
                                        width: 240,
                                        labelWidth: 90,
                                        labelAlign: 'right',
                                        disabled: true,
                                        maxValue: 100,
                                        minValue: 0,
                                        enforceMaxLength: true,
                                        maxLength: 5,
                                        bubbleEvents: [
                                            'change'
                                        ]
                                    },
                                    title: 'Company Details',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            fieldLabel: 'Company',
                                            name: 'company'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            anchor: '100%',
                                            fieldLabel: 'Price',
                                            name: 'price'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            anchor: '100%',
                                            fieldLabel: 'Revenue',
                                            name: 'revenue'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            anchor: '100%',
                                            fieldLabel: 'Growth',
                                            name: 'growth'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            anchor: '100%',
                                            fieldLabel: 'Product',
                                            name: 'product'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            anchor: '100%',
                                            fieldLabel: 'Market',
                                            name: 'market'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onColumnItemMouseUp: function(item) {
        var chart = Ext.ComponentQuery.query('#companyChart')[0],
            grid = Ext.ComponentQuery.query('#companyGrid')[0],
            series = chart.series.get(0);

        grid.getSelectionModel().select(Ext.Array.indexOf(series.items, item));
    }

});