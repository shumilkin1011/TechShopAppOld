Ext.define('TechShopApp.view.main.Main', {
    extend: 'Ext.panel.Panel',
    title: "Магазин цифровой техники",
    header: false,

    requires: ['TechShopApp.view.ToolBarTop',],

    layout: {
        type: 'fit'
    },

    items: [
        {
            xtype: 'panel',
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: 'center'
            },
            scrollable: {
                y: 'scroll'
            },
            overflowY: 'scroll',
            border: false,
            header: false,
            items: [
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'toolbartop'
                        },
                        {
                            xtype: 'toolbarmiddle'
                        },
                        {
                            xtype: 'toolbarbottom'
                        },


                    ],

                },
                {
                    xtype: 'mainpage',

                }

            ]
        },

    ]

});