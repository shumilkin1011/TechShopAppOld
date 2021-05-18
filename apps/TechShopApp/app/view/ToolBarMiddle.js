Ext.define('TechShopApp.view.ToolBarMiddle',
    {
        extend: 'Ext.panel.Panel',
        xtype: 'toolbarmiddle',
        layout: {
            type: 'hbox',
            align: 'stretch',
        },
        border: false,
        height: 100,
        bodyStyle: {
            background: '#f1f1f1',
        },
        items: [
            {
                xtype: 'container',
                flex: 1,
                layout: {
                    type: 'hbox',
                    align: 'middle'
                },
                padding: '0 24 0 24',
                items: [
                    {
                        xtype: 'label',
                        flex: 1,
                        cls: 'logo',
                        //inputType: 'search',
                        minWidth: 140,
                        maxWidth: 160,
                        width: 160,
                        margin: '0 48 0 24',
                        height: 60,
                        href: 'http://localhost:1841/apps/TechShopApp/',
                        html: '<img src="https://hobbygames.ru/assets/img/svg/logo.svg" alt="logo">' +
                            '</a>',

                    },
                    {
                        xtype: 'combobox',
                        triggerWrapCls: 'searchField',
                        margin: '0 24 0 0',
                        minWidth: 400,
                        height: 36,
                        flex: 2,
                        cls: 'searchFieldTxt',
                        emptyText: "Поиск по товарам",
                        triggerCls: Ext.baseCSSPrefix + 'form-search-trigger',
                    },
                    {
                        xtype: 'label',
                        margin: '0 24 0 0',
                        border: false,
                        cls: 'cartOrange',
                        flex: 1,
                        minWidth: 100,
                        maxWidth: 110,
                        height: 24,
                        width: 100,
                        html: '<a  href="#" >'+

                            '<span>' +
                            '<img width="24" height="24" src="https://cdn.icon-icons.com/icons2/1760/PNG/128/4105931-add-to-cart-buy-cart-sell-shop-shopping-cart_113919.png" alt="cart">' +
                            '</span>'+
                            '<span class="mainfontbl">Корзина</span>'+

                            '</a>'

                    },
                    {
                        xtype: 'container',
                        flex:1,
                        maxWidth: 150,
                        minWidth: 140,
                        height: 90,
                        padding: '20 24 20 0',
                        layout: {
                            type: 'vbox',
                            pack: 'center',
                            align: 'stretch'
                        },
                        items: [
                            {
                                xtype: 'label',
                                style: {'text-align': 'right', },
                                minWidth: 130,
                                width: 130,
                                margin: '0 0 10 0',
                                html: '<div><a style="text-decoration: none;color: black;font-weight: bold" href="#">+7 (909) 294-12-17</a></div>'
                            },
                            {
                                xtype: 'label',
                                style: {'text-align': 'right'},
                                minWidth: 130,
                                width: 130,
                                html: '<a class="linkOrange" href="#">Обратный звонок</a>'
                            }
                        ]
                    }

                ]
            }

        ]
    }
);