Ext.define('TechShopApp.view.main.Main', {
    extend: 'Ext.panel.Panel',
    title: "Магазин цифровой техники",

    requires: ['TechShopApp.view.ToolBarTop',],

    layout: {
        type: 'card'
    },
    items: [
        {
            xtype: 'panel',
            layout: 'border',
            border: false,
            header: false,
            items: [
                {
                    xtype: 'toolbartop',
                    region: 'north',
                },
                {
                    xtype: 'panel',
                    reference: 'menu',
                    region: 'center',
                    items: [
                        {
                            xtype: 'menu',
                            autoshow: true,
                            region: 'west',
                            items: [{
                                text: 'regular item 1'
                            }, {
                                text: 'regular item 2'
                            }, {
                                text: 'regular item 3'
                            }]
                        },
                    ]
                }

            ]
        },

    ]

});