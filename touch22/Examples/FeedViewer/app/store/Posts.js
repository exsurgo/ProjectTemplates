/*
 * File: app/store/Posts.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Feed.store.Posts', {
    extend: 'Ext.data.Store',
    alias: 'store.posts',

    requires: [
        'Feed.model.Post',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    config: {
        model: 'Feed.model.Post',
        storeId: 'Posts',
        proxy: {
            type: 'jsonp',
            url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0',
            reader: {
                type: 'json',
                rootProperty: 'responseData.feed.entries'
            }
        }
    },

    loadPosts: function(feedUrl, numPosts) {
        this.load({
            params:{
                q: feedUrl,
                num: numPosts || 20
            }
        });

    }

});