Ext.define('TechShopApp.view.ItemList', {
    extend: 'Ext.view.View',
    xtype: 'itemlist',
    style: {
        display: 'inline-flex',
        'flex-wrap': 'wrap',
        'justify-content': 'center'
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
                "item": 'МФУ струйный CANON PIXMA MG2540S, черный',
                "img": 'https://items.s1.citilink.ru/1093354_v01_b.jpg',
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
        '<img style="align-self: center;" width="150" height="150" alt="img" src={img}>',
        '<div class="itemId"hidden>secret</div>',
        '<p class="itemName" style="font-size: 16px;padding-top: 10px;margin-top: 20px">{item}</p>',
        '<div class="priceDiv">',
        '<div style="float: left;margin-left: 15px"><span class = "priceTag">1666</span><span class="priceRubble">&#8381</span></div>',
        '<div style="float: right;margin-right: 15px"><span ><button type="button" class="btn btn-outline-warning">Купить</button></span></div>',
        '</div>',
        '</div>',
        '</tpl>'


    ],
    itemSelector: 'div.dataview-item',
    listeners: {
        afterrender: function (myDataView) {
            myDataView.getEl().on('click', function (e,t) {
                alert('Куплено!');
            },null, {delegate: '.btn-outline-warning'})
            myDataView.getEl().on('click', function(e, t) {
                e.stopEvent();
                debugger;
                alert('Нажат товар: ' + t.parentElement.getElementsByClassName('itemName')[0].innerText);
            }, null, {delegate: 'img'});
        }
    }
})