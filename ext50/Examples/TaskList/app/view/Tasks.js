/*
 * File: app/view/Tasks.js
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

Ext.define('TaskList.view.Tasks', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.tasks',

    requires: [
        'TaskList.view.TasksViewModel',
        'TaskList.view.TasksViewController',
        'Ext.grid.Panel',
        'Ext.grid.column.Date',
        'Ext.grid.column.Template',
        'Ext.XTemplate',
        'Ext.form.field.Display',
        'Ext.form.Panel',
        'Ext.form.field.Date',
        'Ext.form.field.ComboBox',
        'Ext.form.field.HtmlEditor',
        'Ext.button.Button',
        'Ext.toolbar.Toolbar'
    ],

    controller: 'tasks',
    viewModel: {
        type: 'tasks'
    },
    layout: 'fit',

    items: [
        {
            xtype: 'panel',
            layout: 'border',
            collapsed: false,
            title: 'Tasks',
            items: [
                {
                    xtype: 'gridpanel',
                    flex: 1,
                    region: 'center',
                    split: true,
                    reference: 'list',
                    resizable: false,
                    title: '',
                    forceFit: true,
                    bind: {
                        store: '{tasks}'
                    },
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'description',
                            text: 'Description'
                        },
                        {
                            xtype: 'datecolumn',
                            maxWidth: 100,
                            dataIndex: 'dueDate',
                            text: 'Due Date',
                            format: 'm/j/Y'
                        },
                        {
                            xtype: 'templatecolumn',
                            maxWidth: 100,
                            tpl: [
                                '<table>',
                                '    <tr>',
                                '        <td style="padding-right: 8px">',
                                '            <img src="resources/images/{priority}.png" title="{priority} Priority" />',
                                '        </td>',
                                '        <td>',
                                '            {priority}',
                                '        </td>',
                                '    </tr>',
                                '</table>'
                            ],
                            dataIndex: 'priority',
                            text: 'Priority'
                        }
                    ],
                    listeners: {
                        select: 'select'
                    }
                },
                {
                    xtype: 'panel',
                    flex: 1,
                    region: 'east',
                    split: true,
                    reference: 'display',
                    width: 150,
                    layout: 'card',
                    bodyBorder: true,
                    items: [
                        {
                            xtype: 'panel',
                            reference: 'selectMessage',
                            bodyBorder: true,
                            layout: {
                                type: 'vbox',
                                align: 'center',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    html: '<h1>Please select a record</h1>'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            reference: 'details',
                            bodyBorder: true,
                            bodyPadding: 10,
                            items: [
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'ID',
                                    bind: {
                                        value: '{record.id}'
                                    }
                                },
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Description',
                                    bind: {
                                        value: '{record.description}'
                                    }
                                },
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Due Date',
                                    bind: {
                                        value: '{record.dueDate}'
                                    }
                                },
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Priority',
                                    bind: {
                                        value: '{record.priority}'
                                    }
                                },
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Details',
                                    bind: {
                                        value: '{record.details}'
                                    }
                                },
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Created At',
                                    bind: {
                                        value: '{record.createdAt}'
                                    }
                                },
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Updated At',
                                    bind: {
                                        value: '{record.updatedAt}'
                                    }
                                },
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Assigned To',
                                    bind: {
                                        value: '{record.assignedTo}'
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            reference: 'form',
                            bodyBorder: true,
                            bodyPadding: 10,
                            title: 'Edit Task',
                            items: [
                                {
                                    xtype: 'textfield',
                                    width: 500,
                                    fieldLabel: 'Description',
                                    name: 'description',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'datefield',
                                    fieldLabel: 'Due Date',
                                    name: 'dueDate'
                                },
                                {
                                    xtype: 'combobox',
                                    fieldLabel: 'Priority',
                                    name: 'priority',
                                    allowBlank: false,
                                    store: [
                                        [
                                            'High',
                                            'High'
                                        ],
                                        [
                                            'Normal',
                                            'Normal'
                                        ],
                                        [
                                            'Low',
                                            'Low'
                                        ]
                                    ]
                                },
                                {
                                    xtype: 'htmleditor',
                                    fieldLabel: 'Details',
                                    name: 'details'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Assigned To',
                                    name: 'assignedTo',
                                    maxLength: 30,
                                    minLength: 5,
                                    regex: /[a-z]{1}[a-z0-9_]+/,
                                    regexText: 'Username must begin with a letter, followed by any combination of alphanumeric characters and underscores'
                                },
                                {
                                    xtype: 'container',
                                    padding: 10,
                                    layout: {
                                        type: 'hbox',
                                        align: 'middle',
                                        pack: 'center'
                                    },
                                    items: [
                                        {
                                            xtype: 'button',
                                            flex: 1,
                                            formBind: true,
                                            itemId: 'saveButton',
                                            margin: 5,
                                            text: 'Save',
                                            listeners: {
                                                click: 'save'
                                            }
                                        },
                                        {
                                            xtype: 'button',
                                            flex: 1,
                                            itemId: 'cancelButton',
                                            margin: 5,
                                            text: 'Cancel',
                                            listeners: {
                                                click: 'cancelEdit'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Add',
                            listeners: {
                                click: 'add'
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'Edit',
                            bind: {
                                hidden: '{!record}'
                            },
                            listeners: {
                                click: 'edit'
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'Remove',
                            bind: {
                                hidden: '{!record}'
                            },
                            listeners: {
                                click: 'remove'
                            }
                        }
                    ]
                }
            ]
        }
    ]

});