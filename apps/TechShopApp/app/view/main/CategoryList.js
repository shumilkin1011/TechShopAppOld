Ext.define('TechShopApp.view.CategoryList',{
    extend: 'Ext.container.Container',
    xtype: 'categorylist',
    cls: 'panelBorder categoryList',
    minWidth: 200,
    maxWidth: 290,
    flex: 1,
    layout: {
    type: 'vbox',
        align: 'stretch'
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
            html: 'Категории'
        },
        {
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },

            margin: '7 25 10 28',
            listeners: {
                afterrender: function (cmp) {
                    cmp.getEl().on('click', function (e,t) {
                        alert('Активна категория: ' + t.innerText);
                    },null, {delegate: '.categoryItem'})
                }
            },
            items: [
                {
                    xtype: 'label',
                    cls: 'categoryItem',
                    html: '<a href="#printers">Смартфоны и гаджеты</a>'
                },
                {
                    xtype: 'label',
                    cls: 'categoryItem',
                    html: '<a href="#printers">Ноутбуки и компьютеры</a>'
                },
                {
                    xtype: 'label',
                    cls: 'categoryItem',
                    html: '<a href="#printers">Телевизоры, аудио-видео, HI-FI</a>'
                },
                {
                    xtype: 'label',
                    cls: 'categoryItem',
                    html: '<a href="#printers">Бытовая техника для дома и кухни</a>'
                },
                {
                    xtype: 'label',
                    cls: 'categoryItem',
                    html: '<a href="#printers">Строительство и ремонт</a>'
                },
                {
                    xtype: 'label',
                    cls: 'categoryItem',
                    html: '<a href="#printers">Дом и дача</a>'
                },
                {
                    xtype: 'label',
                    cls: 'categoryItem',
                    html: '<a href="#printers">Фото, видео, системы безопасности</a>'
                },
                {
                    xtype: 'label',
                    cls: 'categoryItem',
                    html: '<a href="#printers">Автотовары</a>'
                },
                {
                    xtype: 'label',
                    cls: 'categoryItem',
                    html: '<a href="#printers">Канцтовары, мебель и офисная техника</a>'
                },
                {
                    xtype: 'label',
                    cls: 'categoryItem',
                    html: '<a href="#printers">Красота и здоровье</a>'
                },
                {
                    xtype: 'label',
                    cls: 'categoryItem',
                    html: '<a href="#printers">Детские товары</a>'
                },
                {
                    xtype: 'label',
                    cls: 'categoryItem',
                    html: '<a href="#printers">Спорт и отдых</a>'
                },
                {
                    xtype: 'label',
                    cls: 'categoryItem',
                    html: '<a href="#printers">Товары для геймеров</a>'
                },
                {
                    xtype: 'label',
                    cls: 'categoryItem',
                    html: '<a href="#printers">Уцененные товары</a>'
                },
                {
                    xtype: 'label',
                    cls: 'categoryItem',
                    html: '<a href="#printers">Подарочные сертификаты</a>'
                }

            ]
        },

    ]
})