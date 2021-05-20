Ext.define('TechShopApp.view.ItemList', {
    extend: 'Ext.view.View',
    xtype: 'itemlisthorizontal',
    style: {
        display: 'grid',
    },
    flex: 3,
    layout: {
        type: 'vbox',
        align: 'stretch'
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
        '<div class="dataview-item-horizontal">',
        '<img style="float:left;" width="150" height="150" alt="img" src={img}>',
        '<h2>Название</h2>',
        '<p>{Описание}</p>',
        '<a class = priceTag>{Цена}</a>',
        '</div>',
        '</tpl>'


    ],
    itemSelector: 'div.dataview-item',
})