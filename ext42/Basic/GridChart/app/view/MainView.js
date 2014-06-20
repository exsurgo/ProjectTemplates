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
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Area',
        'Ext.chart.series.Line',
        'Ext.chart.Legend',
        'Ext.grid.Panel',
        'Ext.grid.column.Number',
        'Ext.grid.View'
    ],

    layout: 'border',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'chart',
                    region: 'center',
                    splitterResize: false,
                    itemId: 'cityChart',
                    background: {
                        fill: '#ffffff'
                    },
                    insetPadding: 20,
                    store: 'DetailData',
                    axes: [
                        {
                            type: 'Category',
                            fields: [
                                'month'
                            ],
                            grid: true,
                            title: 'Months',
                            position: 'bottom'
                        },
                        {
                            type: 'Numeric',
                            grid: true,
                            title: 'Temperatures',
                            position: 'left'
                        }
                    ],
                    series: [
                        {
                            type: 'area',
                            highlight: {
                                size: 7,
                                radius: 7
                            },
                            title: [
                                'Avg Low',
                                'Avg High'
                            ],
                            axis: 'left',
                            xField: 'month',
                            yField: [
                                'avglow',
                                'avghigh'
                            ],
                            style: {
                                lineWidth: 1,
                                opacity: 0.50
                            }
                        },
                        {
                            type: 'line',
                            highlight: {
                                size: 7,
                                radius: 7
                            },
                            tips: {
                                trackMouse: true,
                                width: 160,
                                height: 25,
                                //add a custom message to the tooltip
                                renderer: function(storeItem, item) {
                                    this.setTitle('Avg High: ' + storeItem.get('high') + ' Degrees');
                                }
                            },
                            title: 'High',
                            axis: 'left',
                            xField: 'month',
                            yField: 'high',
                            markerConfig: {
                                type: 'cross',
                                size: 4,
                                radius: 4,
                                'stroke-width': 0
                            },
                            smooth: 3
                        },
                        {
                            type: 'line',
                            highlight: {
                                size: 7,
                                radius: 7
                            },
                            tips: {
                                trackMouse: true,
                                width: 160,
                                height: 25,
                                //add a custom message to the tooltip
                                renderer: function(storeItem, item) {
                                    this.setTitle('Avg Low: ' + storeItem.get('low') + ' Degrees');
                                }
                            },
                            title: 'Low',
                            axis: 'left',
                            xField: 'month',
                            yField: 'low',
                            markerConfig: {
                                type: 'circle',
                                size: 4,
                                radius: 4,
                                'stroke-width': 0
                            },
                            smooth: true
                        }
                    ],
                    legend: {

                    }
                },
                {
                    xtype: 'gridpanel',
                    collapseMode: 'mini',
                    region: 'west',
                    split: true,
                    itemId: 'cityGrid',
                    width: 300,
                    collapsible: true,
                    title: 'High-Low Temperature by Month',
                    store: 'CityData',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'city',
                            text: 'City'
                        },
                        {
                            xtype: 'numbercolumn',
                            dataIndex: 'avghigh',
                            text: 'Avg High'
                        },
                        {
                            xtype: 'numbercolumn',
                            dataIndex: 'avglow',
                            text: 'Avg Low'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});