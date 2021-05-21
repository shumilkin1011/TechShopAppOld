Ext.define('TechShopApp.store.ProductStore', {
    extend: 'Ext.data.Store',
    alias: 'store.product',

    //autoSort: true,
    // sorters: [{
    //     property: 'countryName',
    //     direction: 'ASC'
    // }],

    model: 'TechShopApp.model.Product',
    proxy: {
        type: 'ajax',
        url : '../api/v1/products',
    },
    autoLoad: false,
    //remoteFilter: true,

});




