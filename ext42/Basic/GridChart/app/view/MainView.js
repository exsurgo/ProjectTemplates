/*
 * File: app/view/MainView.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
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
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.Legend'
    ],

    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                me.processCityChart({
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
                    legend: {

                    }
                }),
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
    },

    processCityChart: function(config) {
        //by setting up the series object in the process config,
        //we can setup a more complex chart.
        config.series = [{

            //setup the area series. we'll use this for the BG
            type: 'area',
            highlight: {
                size: 7,
                radius: 7
            },
            axis: 'left',
            smooth: true,
            xField: 'month',
            yField: ['avglow','avghigh'],
            style: {
                lineWidth: 1,
                opacity: 0.50
            }
        },{

            //our line series will be in the foreground
            type: 'line',
            highlight: {
                size: 7,
                radius: 7
            },
            axis: 'left',
            xField: 'month',
            yField: 'high',
            tips: {
                trackMouse: true,
                width: 160,
                height: 25,
                //add a custom message to the tooltip
                renderer: function(storeItem, item) {
                    this.setTitle('Avg High: ' + storeItem.get('high') + ' Degrees');
                }
            },
            //assign our own marker
            markerConfig: {
                type: 'cross',
                size: 4,
                radius: 4,
                'stroke-width': 0
            }
        }, {
            type: 'line',
            highlight: {
                size: 7,
                radius: 7
            },
            axis: 'left',
            smooth: true,
            xField: 'month',
            yField: 'low',
            tips: {
                trackMouse: true,
                width: 160,
                height: 25,
                //add a custom message to the tooltip
                renderer: function(storeItem, item) {
                    this.setTitle('Avg Low: ' + storeItem.get('low') + ' Degrees');
                }
            },
            //assign our own marker
            markerConfig: {
                type: 'circle',
                size: 4,
                radius: 4,
                'stroke-width': 0
            }
        }];

        return config;
    }

});