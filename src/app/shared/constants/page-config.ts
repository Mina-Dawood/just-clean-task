export const PAGES_CONFIG = {
    home: {
        name: 'home',
        route: '/home'
    },
    items: {
        name: 'items',
        route: '/items',
        children: {
            itemList: {
                name: 'item-list',
                route: '/item-list'
            }
        }
    }
};
