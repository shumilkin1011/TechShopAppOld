Ext.define('TechShopApp.view.CategoryDescPanel',{
    extend: 'Ext.container.Container',
    xtype: 'categorydesc',
    width: '100%',
        padding: '4 20 4 20',
    margin: 24,
    minHeight: 1,
    maxHeight: 300,
    style: {
    background: 'white',
        display: 'inline-block'
},
    layout: {
        type: 'fit'
    },
    cls: 'panelBorder',
        items: [
    {
        xtype: 'label',
        text: 'Настольные игры откроют для вас огромнейший развлекательный мир с множеством разнообразных приключений на любую тематику.  В интернет-магазине и сети фирменных магазинов Hobby Games вы найдёте более 4000 наименований самых популярных игр по лучшим ценам и для любой аудитории. Вашему вниманию в широком ассортименте представлены настольные игры для вечеринок, предназначенные для больших и желательно шумных компаний; семейные игры, которые объединят за игровым столом игроков разных поколений и интересов; игры, ориентированные в первую очередь на детей, вкупе с ярким и весёлым дизайном помогающие развить те или иные навыки. Также вы найдёте в нашем каталоге различные настольные ролевые игры, сложные стратегические и хардкорные, коллекционно-карточные и экономические настолки, а также многие другие!',
        cls: 'categoryDesc'
    }
]
})