import { SideNavInterface } from '../../interfaces/side-nav.type';

let menu: SideNavInterface[];
let menu_admin: SideNavInterface[];
let menu_final: SideNavInterface[];
let roles
let workspace




if(localStorage.getItem('userdata')!= undefined){
    roles = JSON.parse(localStorage.getItem('userdata'))['roles'];
    workspace = localStorage.getItem('workspace_name');
    console.log(roles)
}else{
    roles = []
}

if(roles != null && roles != undefined){   
    menu = [];
    menu_admin = [
        {
            path: workspace+'/dashboard',
            title: 'Dashboard',
            iconType: 'nzIcon',
            iconTheme: 'outline',
            icon: 'bar-chart',
            submenu: []
        },
        {
            path: workspace+'/usuarios',
            title: 'Usuarios',
            iconType: 'nzIcon',
            iconTheme: 'outline',
            icon: 'user',
            submenu: []
        },
    ]

    menu_final = [
        {
            path: workspace+'/configuracoes',
            title: 'Configurações',
            iconType: 'nzIcon',
            iconTheme: 'outline',
            icon: 'setting',
            submenu: []
        },
        {
            path: workspace+'/authentication/sair',
            title: 'Sair',
            iconType: 'nzIcon',
            iconTheme: 'outline',
            icon: 'poweroff',
            submenu: []
        },
    ]
    console.log(roles)
    //Se for Admin
    if(roles.includes("ROLE_ADMIN")){
        console.log("vraau")
        menu = menu.concat(menu_admin);
        menu = menu.concat(menu_final);
    //Se for Usuário comum
    }
}

export const ROUTES: SideNavInterface[] = menu ; 