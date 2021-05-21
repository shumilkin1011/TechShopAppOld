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
    store: {
        type: 'product',
        autoLoad: true
    },
    tpl: [
        '<tpl for=".">',
        '<div class="dataview-item">',
        '<img style="align-self: center;" width="150" height="150" alt="img" src={img}>',
        '<div class="itemId"hidden>{id}</div>',
        '<p class="itemName" style="font-size: 16px;padding-top: 10px;margin-top: 20px">{name}</p>',
        '<div class="priceDiv">',
        '<div style="float: left;margin-left: 15px"><span class = {[Boolean(values.isDiscount) ? "priceTagDisc" : "priceTag"]}>{[Number(values.price).toLocaleString()]}</span><span class={[Boolean(values.isDiscount) ? "priceRubbleDisc" : "priceRubble"]}>&#8381</span></div>',
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