/*
 * File: app/view/Toolbars.js
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

Ext.define('ComponentOverview.view.Toolbars', {
    extend: 'Ext.Container',
    alias: 'widget.toolbars',

    requires: [
        'Ext.TitleBar',
        'Ext.field.Search',
        'Ext.field.Select',
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.SegmentedButton'
    ],

    config: {
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Dark',
                items: [
                    {
                        xtype: 'searchfield',
                        placeHolder: 'search'
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'text'
                    },
                    {
                        xtype: 'selectfield',
                        value: null,
                        options: [
                            {
                                text: 'First Option',
                                value: 'firstOption'
                            },
                            {
                                text: 'Second Option',
                                value: 'secondOption'
                            },
                            {
                                text: 'Third Option',
                                value: 'thirdOption'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'titlebar',
                docked: 'top',
                ui: 'light',
                title: 'Light',
                items: [
                    {
                        xtype: 'searchfield',
                        placeHolder: 'search'
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'text'
                    },
                    {
                        xtype: 'selectfield',
                        value: null,
                        options: [
                            {
                                text: 'First Option',
                                value: 'firstOption'
                            },
                            {
                                text: 'Second Option',
                                value: 'secondOption'
                            },
                            {
                                text: 'Third Option',
                                value: 'thirdOption'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'titlebar',
                docked: 'top',
                ui: 'neutral',
                title: 'Neutral',
                items: [
                    {
                        xtype: 'searchfield',
                        placeHolder: 'search'
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'text'
                    },
                    {
                        xtype: 'selectfield',
                        value: null,
                        options: [
                            {
                                text: 'First Option',
                                value: 'firstOption'
                            },
                            {
                                text: 'Second Option',
                                value: 'secondOption'
                            },
                            {
                                text: 'Third Option',
                                value: 'thirdOption'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        ui: 'back',
                        text: 'Back'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        badgeText: '3',
                        text: 'Counter'
                    },
                    {
                        xtype: 'button',
                        ui: 'round',
                        text: 'Round'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'segmentedbutton',
                        items: [
                            {
                                xtype: 'button',
                                text: 'Left'
                            },
                            {
                                xtype: 'button',
                                pressed: true,
                                text: 'Right'
                            }
                        ]
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        ui: 'action',
                        text: 'Action'
                    },
                    {
                        xtype: 'button',
                        ui: 'decline',
                        text: 'Decline'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        ui: 'forward',
                        text: 'Forward'
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                ui: 'light',
                items: [
                    {
                        xtype: 'button',
                        ui: 'back',
                        text: 'Back'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        badgeText: '3',
                        text: 'Counter'
                    },
                    {
                        xtype: 'button',
                        ui: 'round',
                        text: 'Round'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'segmentedbutton',
                        items: [
                            {
                                xtype: 'button',
                                text: 'Left'
                            },
                            {
                                xtype: 'button',
                                pressed: true,
                                text: 'Right'
                            }
                        ]
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        ui: 'action',
                        text: 'Action'
                    },
                    {
                        xtype: 'button',
                        ui: 'decline',
                        text: 'Decline'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        ui: 'forward',
                        text: 'Forward'
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                ui: 'neutral',
                items: [
                    {
                        xtype: 'button',
                        ui: 'back',
                        text: 'Back'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        badgeText: '3',
                        text: 'Counter'
                    },
                    {
                        xtype: 'button',
                        ui: 'round',
                        text: 'Round'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'segmentedbutton',
                        items: [
                            {
                                xtype: 'button',
                                text: 'Left'
                            },
                            {
                                xtype: 'button',
                                pressed: true,
                                text: 'Right'
                            }
                        ]
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        ui: 'action',
                        text: 'Action'
                    },
                    {
                        xtype: 'button',
                        ui: 'decline',
                        text: 'Decline'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        ui: 'forward',
                        text: 'Forward'
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                layout: {
                    type: 'hbox',
                    align: 'center',
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'action'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'add'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'arrow_down'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'arrow_left'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'arrow_right'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'arrow_up'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'bookmarks'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'compose'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'delete'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'download'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'favorites'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'home'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'info'
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                ui: 'light',
                layout: {
                    type: 'hbox',
                    align: 'center',
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'action'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'add'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'arrow_down'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'arrow_left'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'arrow_right'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'arrow_up'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'bookmarks'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'compose'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'delete'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'download'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'favorites'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'home'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'info'
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                ui: 'neutral',
                layout: {
                    type: 'hbox',
                    align: 'center',
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'action'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'add'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'arrow_down'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'arrow_left'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'arrow_right'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'arrow_up'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'bookmarks'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'compose'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'delete'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'download'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'favorites'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'home'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'info'
                    }
                ]
            }
        ]
    }

});