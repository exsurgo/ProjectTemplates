/*
 * File: app/store/Companies.js
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

Ext.define('MyApp.store.Companies', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.Company',
        'Ext.data.proxy.Memory'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'MyApp.model.Company',
            storeId: 'Companies',
            data: [
                {
                    company: '3m Co',
                    price: 2.2,
                    revenue: 9.25,
                    growth: 79.4,
                    product: 59.61,
                    market: 81.16
                },
                {
                    company: 'Alcoa Inc',
                    price: 54.48,
                    revenue: 3.81,
                    growth: 93.27,
                    product: 6.57,
                    market: 17.85
                },
                {
                    company: 'Altria Group Inc',
                    price: 4.82,
                    revenue: 3.93,
                    growth: 61.22,
                    product: 83.01,
                    market: 78.68
                },
                {
                    company: 'American Express Company',
                    price: 68.49,
                    revenue: 30.98,
                    growth: 13.49,
                    product: 54.07,
                    market: 66.08
                },
                {
                    company: 'American International Group, Inc.',
                    price: 67.53,
                    revenue: 0.97,
                    growth: 79.91,
                    product: 11.84,
                    market: 59.29
                },
                {
                    company: 'AT&T Inc',
                    price: 69.77,
                    revenue: 56.15,
                    growth: 17.9,
                    product: 94.54,
                    market: 4.08
                },
                {
                    company: 'Boeing Co.',
                    price: 4.77,
                    revenue: 47.53,
                    growth: 54.45,
                    product: 87.99,
                    market: 54.6
                },
                {
                    company: 'Caterpillar Inc.',
                    price: 52.66,
                    revenue: 42.1,
                    growth: 62.28,
                    product: 9.17,
                    market: 81.12
                },
                {
                    company: 'Citigroup, Inc.',
                    price: 3.95,
                    revenue: 31.02,
                    growth: 94.7,
                    product: 84.18,
                    market: 43.51
                },
                {
                    company: 'E.I. du Pont de Nemours and Company',
                    price: 50.75,
                    revenue: 53.59,
                    growth: 79.57,
                    product: 62.1,
                    market: 59.8
                },
                {
                    company: 'Exxon Mobil Corp',
                    price: 29.19,
                    revenue: 14.14,
                    growth: 56.94,
                    product: 26.97,
                    market: 53.86
                },
                {
                    company: 'General Electric Company',
                    price: 22.07,
                    revenue: 40.69,
                    growth: 13.75,
                    product: 80.43,
                    market: 37.24
                },
                {
                    company: 'General Motors Corporation',
                    price: 22.8,
                    revenue: 77.78,
                    growth: 80.18,
                    product: 82.38,
                    market: 38.25
                },
                {
                    company: 'Hewlett-Packard Co',
                    price: 83.9,
                    revenue: 99.82,
                    growth: 0.09,
                    product: 35.63,
                    market: 28.72
                },
                {
                    company: 'Honeywell Intl Inc',
                    price: 15.07,
                    revenue: 9.29,
                    growth: 5.52,
                    product: 11.35,
                    market: 16.19
                },
                {
                    company: 'Intel Corporation',
                    price: 49.21,
                    revenue: 84.02,
                    growth: 51.97,
                    product: 40.5,
                    market: 29.82
                },
                {
                    company: 'International Business Machines',
                    price: 63.87,
                    revenue: 54.63,
                    growth: 38.43,
                    product: 91.75,
                    market: 45.36
                },
                {
                    company: 'Johnson & Johnson',
                    price: 36.92,
                    revenue: 27.43,
                    growth: 19.96,
                    product: 20.78,
                    market: 59.09
                },
                {
                    company: 'JP Morgan & Chase & Co',
                    price: 91.78,
                    revenue: 18.15,
                    growth: 63.24,
                    product: 26.58,
                    market: 34.08
                },
                {
                    company: 'McDonald\'s Corporation',
                    price: 79.72,
                    revenue: 56.69,
                    growth: 44.66,
                    product: 15.19,
                    market: 30.39
                },
                {
                    company: 'Merck & Co., Inc.',
                    price: 40.58,
                    revenue: 99.15,
                    growth: 24.33,
                    product: 42.57,
                    market: 35.18
                },
                {
                    company: 'Microsoft Corporation',
                    price: 5.88,
                    revenue: 54.58,
                    growth: 25.47,
                    product: 23.91,
                    market: 19.52
                },
                {
                    company: 'Pfizer Inc',
                    price: 92.08,
                    revenue: 79.04,
                    growth: 16.4,
                    product: 92.53,
                    market: 73.18
                },
                {
                    company: 'The Coca-Cola Company',
                    price: 87.11,
                    revenue: 71.69,
                    growth: 51.48,
                    product: 21.67,
                    market: 30.28
                },
                {
                    company: 'The Home Depot, Inc.',
                    price: 62.74,
                    revenue: 26.36,
                    growth: 67.67,
                    product: 78.4,
                    market: 40.82
                },
                {
                    company: 'The Procter & Gamble Company',
                    price: 20.37,
                    revenue: 48.19,
                    growth: 59.76,
                    product: 35.23,
                    market: 88.96
                },
                {
                    company: 'United Technologies Corporation',
                    price: 24.26,
                    revenue: 24.43,
                    growth: 50.13,
                    product: 95.32,
                    market: 47.02
                },
                {
                    company: 'Verizon Communications',
                    price: 1.83,
                    revenue: 69.56,
                    growth: 73.6,
                    product: 97.16,
                    market: 35.49
                },
                {
                    company: 'Wal-Mart Stores, Inc.',
                    price: 11.51,
                    revenue: 80.08,
                    growth: 44.58,
                    product: 57.89,
                    market: 78.3
                }
            ],
            proxy: {
                type: 'memory'
            }
        }, cfg)]);
    }
});