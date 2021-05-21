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
                            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">\n' +
                            '  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>\n' +
                            '</svg>' +
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