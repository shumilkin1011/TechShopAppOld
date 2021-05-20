Ext.define('TechShopApp.view.MainPageContent', {
    extend: 'Ext.container.Container',
    xtype: 'mainpagecontent',
    layout: {
        type: 'fit',
    },
    items: [
        {
            xtype: 'container',
            layout: {
                type: 'hbox'
            },
            items: [
                {
                    xtype: 'container',
                    region: 'west',
                    cls: 'panelBorder categoryList',
                    width: 250,
                    minWidth: 200,
                    maxWidth: 250,
                    flex: 1,
                    maxHeight: 2000,
                    layout: {
                        type: 'vbox'
                    },
                    style: {
                        'background-color': 'white',
                        'display': 'block',
                        'height': '2000t'
                    },
                    items: [
                        {
                            xtype: 'label',
                            cls: 'categoryTitle',
                            html: 'Категория'
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'vbox',
                            },
                            style: {
                                display: 'inline-block'
                            },
                            flex: 1,
                            margin: '7 25 10 28',
                            items: [
                                {
                                    xtype: 'label',
                                    cls: 'categoryItem',
                                    html: 'category1'
                                },
                                {
                                    xtype: 'label',
                                    cls: 'categoryItem',
                                    html: 'category2',
                                },
                                {
                                    xtype: 'label',
                                    cls: 'categoryItem',
                                    html: 'category1'
                                },
                                {
                                    xtype: 'label',
                                    cls: 'categoryItem',
                                    html: 'category1'
                                },
                                {
                                    xtype: 'label',
                                    cls: 'categoryItem',
                                    html: 'category1'
                                },
                                {
                                    xtype: 'label',
                                    cls: 'categoryItem',
                                    html: 'category1'
                                },
                                {
                                    xtype: 'label',
                                    cls: 'categoryItem',
                                    html: 'category2',
                                },
                                {
                                    xtype: 'label',
                                    cls: 'categoryItem',
                                    html: 'category1'
                                },
                                {
                                    xtype: 'label',
                                    cls: 'categoryItem',
                                    html: 'category1'
                                },
                                {
                                    xtype: 'label',
                                    cls: 'categoryItem',
                                    html: 'category1'
                                },
                                {
                                    xtype: 'label',
                                    cls: 'categoryItem',
                                    html: 'category1'
                                },
                                {
                                    xtype: 'label',
                                    cls: 'categoryItem',
                                    html: 'category2',
                                },
                                {
                                    xtype: 'label',
                                    cls: 'categoryItem',
                                    html: 'category1'
                                },
                                {
                                    xtype: 'label',
                                    cls: 'categoryItem',
                                    html: 'category1'
                                },
                                {
                                    xtype: 'label',
                                    cls: 'categoryItem',
                                    html: 'category1'
                                }

                            ]
                        },

                    ]
                },
                {
                    xtype: 'dataview',
                    style: {
                        display: 'inline-flex',
                        'flex-wrap': 'wrap'
                    },
                    flex: 3,
                    layout: {
                        type: 'hbox',
                    },
                    padding: '24 0 0 0',

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
                        '<h1>Название</h1>',
                        '<p>{Описание}</p>',
                        '<p>{Цена}</p>',
                        '</div>',
                        '</tpl>'


                    ],
                    itemSelector: 'div.dataview-item',
                }
            ]
        },
    ]
})