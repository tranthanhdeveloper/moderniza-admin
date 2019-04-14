import {RouteInfo} from './side-bar.metadata'

export const ROUTE = [
    { path: 'dashboard', title: 'Dashboard', id:null, icon: 'fas fa-th-large', children: null },
    { path: '#homeSubmenu', title: 'Components', id:'homeSubmenu', icon: 'fas fa-laptop', children:[
        { path: 'cards', title: 'Cards', icon: null, children: null },
        { path: 'carousels', title: 'Carousels', icon: null, children: null },
        { path: 'carousels', title: 'Carousels', icon: null, children: null },
        { path: 'form', title: 'Form', icon: null, children: null },
        { path: 'modals', title: 'Modals', icon: null, children: null },
        { path: 'tables', title: 'Tables', icon: null, children: null }]
    },
    { path: 'charts', title: 'Charts', icon: 'fas fa-chart-pie', children: null },
    { path: 'grids', title: 'Grid Layouts', icon: 'fas fa-th', children: null },
    { path: '#pages', title: 'Pages', icon: 'far fa-file',  id:'pages', children: [
        {path:'pages/404', title:"404", icon:null, children: null},
        {path:'pages/500', title:"500", icon:null, children: null},
        {path:'pages/blank', title:"Blank", icon:null, children: null}
    ]
    },
    { path: 'mailbox', title: 'Mailnox', icon: 'far fa-envelope', children: null },
    { path: 'widgets', title: 'Widgets', icon: 'far fa-window-restore', children: null },
    { path: 'mailbox', title: 'Mailnox', icon: 'far fa-envelope', children: null }
]