Ext.define('TechShopApp.view.ToolBarBottom',
    {
        extend: 'Ext.panel.Panel',
        xtype: 'toolbarbottom',
        layout: {
            type: 'hbox',
            align: 'stretch',
        },
        border: false,
        height: 48,
        bodyStyle: {
            background: '#faa71a',
        },
        items: [
            {
                xtype: 'container',
                flex: 1,
                padding: '0 24 0 24',
                layout: {
                    type: 'hbox',
                    align: 'stretch',
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'button',
                        maxWidth: 205,
                        width: 205,
                        border: false,
                        arrowCls: null,
                        cls: 'categbtn',
                        html: '<span style="display:inline-block;padding-top: 2px; align-content: center; vertical-align: middle"><img  alt="geo" width="24px" height="24px" src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png"></span>' +
                            '<span style="display:inline-block; align-content: center; vertical-align: middle; padding-left: 8px" class="mainfontbl boldtxt" style="padding-left: 16px;text-align: center">Каталог</span>',
                        menu: {
                            xtype: 'menu',
                            width: 205,
                            bodyStyle: {
                                margin: '4 0 0 0'
                            },
                            items: [
                                {
                                    text: '<div>Настольные игры</div>',
                                    enableToggle: true,
                                    height: 38,
                                    cls: 'menuItem',
                                    focusCls: 'menuItemAct',
                                    activeCls: 'menuItemMain',
                                    arrowCls: null,
                                    hideOnClick: false,
                                    border: false,
                                    menu: [
                                        {
                                            xtype: 'container',
                                            layout: 'fit',
                                            shadow: false,
                                            padding: '0 24 0 0',
                                            items: [
                                                {
                                                    xtype: 'gridpanel',
                                                    cls: 'noPanelBorder',
                                                    width: 1000,
                                                    height: 500,
                                                    border: false,
                                                    bodyBorder: false,
                                                    shadow: false,
                                                    header: false,
                                                    frame: false,
                                                    frameHeader: false,
                                                    headerPosition: 'bottom',
                                                    title: "Настольные игры",
                                                    items: [
                                                        {
                                                            xtype: "textfield",
                                                            value: 'txt'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },

                                    ]
                                },
                                {
                                    text: '<div style="font-size: 16px;font-family: sans-serif">Дополнения</div>',
                                    cls: 'menuItem',
                                    arrowCls: null,
                                    hideOnClick: false,
                                    border: false,
                                    activeCls: 'menuItemAct',
                                    focusCls: 'menuItemAct',
                                    menu: [
                                        {
                                            text: 'sub1',
                                        },
                                        {
                                            text: 'sub2',
                                        },
                                        {
                                            text: 'sub3',
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        xtype: 'button',
                        href: '#check/',
                        baseCls: 'catebtn',
                        hrefTarget: '_self',
                        flex: 1,
                        minWidth: 140,
                        overCls: 'categbtnover',
                        cls: 'categbtn',
                        text: 'Настольные игры',
                    },
                    {
                        xtype: 'button',
                        baseCls: 'catebtn',
                        flex: 1,
                        minWidth: 130,
                        border: false,
                        overCls: 'categbtnover',
                        cls: 'categbtn',
                        html: '<span class="mainfontbl boldtxt">Дополнения</span>',
                    },
                    {
                        xtype: 'button',
                        baseCls: 'catebtn',
                        flex: 1,
                        minWidth: 110,
                        border: false,
                        overCls: 'categbtnover',
                        cls: 'categbtn',
                        html: '<span class="mainfontbl boldtxt">Warhammer</span>',
                    },
                    {
                        xtype: 'button',
                        baseCls: 'catebtn',
                        flex: 1,
                        minWidth: 110,
                        border: false,
                        overCls: 'categbtnover',
                        cls: 'categbtn',
                        html: '<span class="mainfontbl boldtxt">ККИ/ЖКИ</span>',
                    },
                    {
                        xtype: 'button',
                        baseCls: 'catebtn',
                        flex: 1,
                        minWidth: 110,
                        border: false,
                        overCls: 'categbtnover',
                        cls: 'categbtn',
                        html: '<span class="mainfontbl boldtxt">Ролевые игры</span>',
                    },
                    {
                        xtype: 'button',
                        baseCls: 'catebtn',
                        flex: 1,
                        minWidth: 110,
                        border: false,
                        overCls: 'categbtnover',
                        cls: 'categbtn',
                        html: '<span class="mainfontbl boldtxt">Новинки</span>',
                    },
                    {
                        xtype: 'button',
                        baseCls: 'catebtn',
                        flex: 1,
                        minWidth: 110,
                        border: false,
                        overCls: 'categbtnover',
                        cls: 'categbtn',
                        html: '<span class="mainfontbl boldtxt">Предзаказ</span>',
                    },
                    {
                        xtype: 'button',
                        baseCls: 'catebtn',
                        flex: 1,
                        minWidth: 100,
                        border: false,
                        overCls: 'categbtnover',
                        cls: 'categbtn',
                        html: '<span class="mainfontbl boldtxt">Акции</span>',
                    },
                ]

            }

        ]
    }
);