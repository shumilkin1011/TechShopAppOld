Ext.define('TechShopApp.view.MainPageContent', {
    extend: 'Ext.container.Container',
    xtype: 'mainpagecontent',
    layout: {
        type: 'fit',
        pack: 'center'
    },
    margin: '-20 0 0 0',
    items: [
        {
            xtype: 'container',
            layout: {
                type: 'hbox',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'categorylist'
                },
                {
                    xtype: 'itemlist'
                }
            ]
        },
    ]
})