Ext.define('TechShopApp.view.main.Main', {
    extend: 'Ext.panel.Panel',
    title: "Магазин цифровой техники",
    header: false,

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
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
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

                    region: 'north',
                },
                {
                    xtype: 'panel',
                    reference: 'menu',
                    region: 'center',
                    items: [
                        {
                            xtype: 'container',
                            margin: '1 0 0 0',
                            layout: {
                                type: 'card',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'panel',
                                    height: 500,
                                    width: '100%',
                                    bodyStyle: {
                                        background: '#f1f1f1'
                                    },
                                    scrollable: {
                                        y: 'scroll'
                                    },
                                    overflowY: 'scroll',
                                    layout: {
                                        type: 'border',
                                    },

                                    items: [
                                        {
                                            region: 'north',
                                            width: '100%',
                                            padding: 24,
                                            minHeight: 130,
                                            maxHeight: 300,
                                            xtype: 'panel',
                                            bodyStyle: {
                                                background: 'white',
                                            },
                                            cls: 'panelBorder'


                                        },
                                        {
                                            region: 'west',
                                            cls: 'panelBorder',
                                            padding: 24,
                                            minWidth: 250,
                                            maxWidth: 300,
                                            flex: 1,
                                            dock: 'left',
                                            xtype: 'panel',
                                            bodyStyle: {
                                                background: 'white'
                                            },


                                        },
                                        {
                                            xtype: 'dataview',
                                            flex: 3,
                                            height: 310,
                                            layout: {
                                                type: 'fit',
                                            },
                                            padding: 24,

                                            scrollable: null,
                                            emptyText: 'No Items Available.',
                                            store: Ext.create('Ext.data.Store', {
                                                autoLoad: true,
                                                storeId: 'item-store',
                                                fields: ['item, img ,decr'],
                                                data: [
                                                    {
                                                        "item": 'name',
                                                        "img": 'https://hobbygames.cdnvideo.ru/image/cache/hobbygames_beta/data/HobbyWorld/Bang/Bang_Armed_Dangerous/Bang_vooruzhen_opasen00-209x273.jpg',
                                                        "desc": 'decription'
                                                    }, {
                                                        "item": 'name',
                                                        "img": 'https://hobbygames.cdnvideo.ru/image/cache/hobbygames_beta/data/HobbyWorld/Bang/Bang_Armed_Dangerous/Bang_vooruzhen_opasen00-209x273.jpg',
                                                        "desc": 'decription'
                                                    }, {
                                                        "item": 'name',
                                                        "img": 'https://hobbygames.cdnvideo.ru/image/cache/hobbygames_beta/data/HobbyWorld/Bang/Bang_Armed_Dangerous/Bang_vooruzhen_opasen00-209x273.jpg',
                                                        "desc": 'decription'
                                                    }, {
                                                        "item": 'name',
                                                        "img": 'https://hobbygames.cdnvideo.ru/image/cache/hobbygames_beta/data/HobbyWorld/Bang/Bang_Armed_Dangerous/Bang_vooruzhen_opasen00-209x273.jpg',
                                                        "desc": 'decription'
                                                    }, {
                                                        "item": 'name',
                                                        "img": 'https://hobbygames.cdnvideo.ru/image/cache/hobbygames_beta/data/HobbyWorld/Bang/Bang_Armed_Dangerous/Bang_vooruzhen_opasen00-209x273.jpg',
                                                        "desc": 'decription'
                                                    }
                                                ]
                                            }),
                                            tpl: [
                                                '<tpl for=".">',
                                                '<div class="dataview-item">',
                                                '<img width="209" height="209" alt="img" src={img}>',
                                                '<p>{desc}</p>',
                                                '<p>{desc}</p>',
                                                '<p>{desc}</p>',
                                                '<p>{desc}</p>',
                                                '<p>{desc}</p>',
                                                '</div>',
                                                '</tpl>'


                                            ],
                                            itemSelector: 'div.dataview-item',
                                        }
                                    ]

                                },

                            ]
                        }
                    ]
                }

            ]
        },

    ]

});