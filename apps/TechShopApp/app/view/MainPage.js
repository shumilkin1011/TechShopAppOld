Ext.define('TechShopApp.view.MainPage', {

    xtype: 'mainpage',
        extend: 'Ext.container.Container',

        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        style: {
            'background': '#f1f1f1'
        },

        items: [
            {
                xtype: 'categorydesc'
            },
            {
                xtype: 'mainpagecontent'
            }
        ]
    }
);