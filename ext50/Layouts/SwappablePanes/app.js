/*
 * File: app.js
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

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({
    views: [
        'MainView'
    ],
    controllers: [
        'Main'
    ],
    name: 'MyApp',

    launch: function() {
        Ext.create('MyApp.view.MainView');
    },

    /* @private Architect utility method */
    $xdsMergeConfigs: function(instance, baseConfig, instanceConfig) {
        var configs, name, value, baseValue, cfg, merge;
        if (instanceConfig) {
            configs = instance.getConfigurator().configs;
            for (name in instanceConfig) {
                value = instanceConfig[name];
                cfg = configs[name];
                if (cfg) {
                    merge = cfg.merge;
                    if (merge) {
                        value = merge.call(cfg, value, baseConfig[name], instance);
                    } else if (value && value.constructor === Object) {
                        baseValue = baseConfig[name];
                        if (baseValue && baseValue.constructor === Object) {
                            value = Ext.Object.merge(baseValue, value);
                        } else {
                            value = Ext.clone(value);
                        }
                    }
                }
                baseConfig[name] = value;
            }
        }
        return baseConfig;
    }

});
