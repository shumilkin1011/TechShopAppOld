Ext.define("TechShopApp.model.Product", {
    extend: 'Ext.data.Model',

    fields: [
        "id",
        "category",
        "name",
        "description",
        "img",
        "price",
        "isDiscount",
        "totalCount"
    ]
})