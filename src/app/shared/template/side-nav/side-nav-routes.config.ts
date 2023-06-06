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
            params: {},
            title: 'Dashboard',
            iconType: 'nzIcon',
            iconTheme: 'outline',
            icon: 'bar-chart',
            submenu: []
        },
        {
            path: workspace+'/usuarios',
            params: {},
            title: 'Usuarios',
            iconType: 'nzIcon',
            iconTheme: 'outline',
            icon: 'user',
            submenu: [
                {
                    path: workspace+'/usuarios',
                    params: {user_type:'todos'},
                    title: 'Todos',
                    iconType: 'nzIcon',
                    iconTheme: 'outline',
                    icon: 'user',
                    submenu: []
                },
                {
                    path: workspace+'/usuarios',
                    params: {user_type:'funcionarios'},
                    title: 'Funcionarios',
                    iconType: 'nzIcon',
                    iconTheme: 'outline',
                    icon: 'user',
                    submenu: []
                },
                {
                    path: workspace+'/usuarios',
                    params: {user_type:'administradores'},
                    title: 'Administradores',
                    iconType: 'nzIcon',
                    iconTheme: 'outline',
                    icon: 'user',
                    submenu: []
                },
                {
                    path: workspace+'/usuarios',
                    params: {user_type:'pacientes'},
                    title: 'Pacientes',
                    iconType: 'nzIcon',
                    iconTheme: 'outline',
                    icon: 'user',
                    submenu: []
                },
            ]
        },
        {
            path: workspace+'/setores',
            params: {},
            title: 'Setores',
            iconType: 'nzIcon',
            iconTheme: 'outline',
            icon: 'folder',
            submenu: []
        },
        {
            path: workspace+'/formularios',
            params: {},
            title: 'Formulários',
            iconType: 'nzIcon',
            iconTheme: 'outline',
            icon: 'form',
            submenu: []
        },
    ]

    menu_final = [
        {
            path: workspace+'/configuracoes',
            params: {},
            title: 'Configurações',
            iconType: 'nzIcon',
            iconTheme: 'outline',
            icon: 'setting',
            submenu: []
        },
        {
            path: workspace+'/authentication/sair',
            params: {},
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