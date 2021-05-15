Ext.define('TechShopApp.view.ToolBarTop',
    {
        extend: 'Ext.panel.Panel',
        xtype: 'toolbartop',
        layout: {
            type: 'hbox',
            align: 'stretch',
        },
        border: true,
        height: 38,
        bodyStyle: {
            background: '#fc9d14',
        },
        items: [
            {
                xtype: 'container',
                flex: 1,
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                padding: '0 24 0 24',
                items: [
                    {
                        xtype: 'container',
                        flex: 2,
                        layout: {
                            type: 'hbox',
                            align: 'middle',
                            pack: 'start'
                        },
                        items: [
                            {
                                xtype: 'label',
                                cls: 'link',
                                html: "<b><a class='link' href='#id2'>test1</a></b>",
                            }
                        ]
                    },
                    {
                        flex: 4,
                        xtype: 'container',

                        layout: {
                            type: 'hbox',
                            align: 'middle',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: 'label',
                                margin: '0 20 0 20',
                                cls: 'link',
                                html: `<a href="#test">test1</a>`,
                            },
                            {
                                xtype: 'label',
                                margin: '0 20 0 20',
                                cls: 'link',
                                html: `<a href="#test">test1</a>`,
                            },
                            {
                                xtype: 'label',
                                cls: 'link',
                                margin: '0 20 0 20',
                                html: `<a href="#test">test1</a>`,
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        flex: 2,
                        layout: {
                            type: 'hbox',
                            align: 'middle',
                            pack: 'end'
                        },
                        items: [
                            {
                                xtype: 'label',
                                cls: 'link',
                                html: `<a href="#test">test1</a>`,
                            }
                        ]
                    }
                ]
            }

        ]
    }
);