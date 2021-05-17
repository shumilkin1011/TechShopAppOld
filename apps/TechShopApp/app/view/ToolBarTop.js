Ext.define('TechShopApp.view.ToolBarTop',
    {
        extend: 'Ext.panel.Panel',
        xtype: 'toolbartop',
        layout: {
            type: 'hbox',
            align: 'stretch',
        },
        border: false,
        height: 38,
        bodyStyle: {
            background: '#212121',
        },

        items: [
            {
                xtype: 'container',
                flex: 1,
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                padding: '0 24 0 17',
                items: [
                    {
                        xtype: 'container',
                        flex: 2,
                        layout: {
                            type: 'hbox',
                            align: 'middle',
                            pack: 'start'
                        },
                        items: [
                            {
                                xtype: 'button',
                                cls: 'transpbtn',
                                border: false,
                                height: 24,
                                html: '<span style="display:inline-block; align-content: center; padding-bottom: 3px; vertical-align: middle"><img  alt="geo" width="24px" height="24px" src="https://psv4.userapi.com/c537232/u150226562/docs/d4/a88efecfc37b/fluent_location-12-filled.png"></span>'+
                                    '<span class="mainfont geo" style="display:inline-block; align-content: center; vertical-align: middle;padding-bottom: 6px; padding-left: 8px" style="padding-left: 16px;text-align: center">Нижегородская область</span>'

                            },
                            {
                                xtype: 'label',
                                cls: 'link',
                                margin: '0 24 0 24',
                                html: `<a href="#id2">Адреса магазинов</a>`,
                            },
                        ]
                    },
                    {
                        xtype: 'container',
                        width: '25%',
                        layout: {
                            type: 'hbox',
                            align: 'middle',
                            pack: 'end'
                        },
                        items: [
                            {
                                xtype: 'label',
                                width: 200,
                                cls: 'link txtleft',
                                html: `<a href="#id2">Личный кабинет</a>`,
                            }
                        ]
                    }
                ]
            }

        ]
    }
);