import { SideNavInterface } from '../../interfaces/side-nav.type';

let menu: SideNavInterface[];
let menu_dfe: SideNavInterface[];
let menu_dashboard: SideNavInterface[];
let menu_empresa: SideNavInterface[];
let menu_admin: SideNavInterface[];
let menu_final: SideNavInterface[];
let menu_afiliado: SideNavInterface[];
let menu_financeiro: SideNavInterface[];
let menu_farol: SideNavInterface[];
let roles = JSON.parse(localStorage.getItem('roles'));

if(roles != null && roles != undefined){   
    menu = [];
    
    //Menu Dashboard
    menu_dashboard = [
        {
            path: 'dashboard',
            title: 'Dashboard',
            iconType: 'nzIcon',
            iconTheme: 'outline',
            icon: 'dashboard',
            submenu: []
        }
    ];

    menu_farol = [
        {
            path: 'farol',
            title: 'Farol',
            iconType: 'nzIcon',
            iconTheme: 'outline',
            icon: 'dashboard',
            submenu: []
        }
    ];
    //menu Notas
    menu_dfe = [
        {
            path: '/dfe/lista/nfse/todos',
            title: 'NFS-e',
            iconType: 'nzIcon',
            icon: 'swap',
            iconTheme: '',
            submenu: []
        },
        {
            path: '',
            title: 'NF-e',
            iconType: 'nzIcon',
            icon: 'swap',
            iconTheme: '',
            submenu: [
                {
                    path: '/dfe/lista/nfe/todos',
                    title: 'Todas',
                    iconType: 'nzIcon',
                    icon: 'swap',
                    iconTheme: '',
                    submenu: []
                },
                {
                    path: '/dfe/lista/nfe/emitente',
                    title: 'Saída',
                    iconType: 'nzIcon',
                    icon: 'swap-right',
                    iconTheme: '',
                    submenu: []
                },
                {
                    path: '/dfe/lista/nfe/destinatario',
                    title: 'Entrada',
                    iconType: 'nzIcon',
                    icon: 'swap-left',
                    iconTheme: '',
                    submenu: []
                },
                {
                    path: '/dfe/lista/nfe/participante',
                    title: 'Participante',
                    iconType: 'nzIcon',
                    icon: 'swap',
                    iconTheme: '',
                    submenu: []
                }
            ]
        },
        {
            path: '',
            title: 'CT-e',
            iconType: 'nzIcon',
            icon: 'car',
            iconTheme: '',
            submenu: [
                {
                    path: '/dfe/lista/cte/todos',
                    title: 'Todas',
                    iconType: 'nzIcon',
                    icon: 'car',
                    iconTheme: '',
                    submenu: []
                },
                {
                    path: '/dfe/lista/cte/destinatario',
                    title: 'Destinatário',
                    iconType: 'nzIcon',
                    icon: 'car',
                    iconTheme: '',
                    submenu: []
                },        
                {
                    path: '/dfe/lista/cte/remetente',
                    title: 'Remetente',
                    iconType: 'nzIcon',
                    icon: 'car',
                    iconTheme: '',
                    submenu: []
                },
                {
                    path: '/dfe/lista/cte/emitente',
                    title: 'Emitente',
                    iconType: 'nzIcon',
                    icon: 'car',
                    iconTheme: '',
                    submenu: []
                },
                {
                    path: '/dfe/lista/cte/tomador',
                    title: 'Tomador',
                    iconType: 'nzIcon',
                    icon: 'car',
                    iconTheme: '',
                    submenu: []
                },
                {
                    path: '/dfe/lista/cte/expeditor',
                    title: 'Expeditor',
                    iconType: 'nzIcon',
                    icon: 'car',
                    iconTheme: '',
                    submenu: []
                }
            ]
        },
        {
            path: '',
            title: 'CF-e',
            iconType: 'nzIcon',
            icon: 'swap',
            iconTheme: '',
            submenu: [
                {
                    path: '/dfe/lista/cfe/todos',
                    title: 'Todos',
                    iconType: 'nzIcon',
                    icon: 'swap',
                    iconTheme: '',
                    submenu: []
                },
                {
                    path: '/dfe/lista/cfe/emitente',
                    title: 'Emitente',
                    iconType: 'nzIcon',
                    icon: 'swap-right',
                    iconTheme: '',
                    submenu: []
                },
                {
                    path: '/dfe/lista/cfe/destinatario',
                    title: 'Destinatário',
                    iconType: 'nzIcon',
                    icon: 'swap-left',
                    iconTheme: '',
                    submenu: []
                }
            ]
        },
    ];
    //Menu Empresa
    menu_empresa = [
        {
            path: 'empresas',
            title: 'Empresas',
            iconType: 'nzIcon',
            iconTheme: 'outline',
            icon: 'shop',
            submenu: []
        }
    ];
    //Menu Admin
    menu_admin = [
        {
            path: 'admin/users',
            title: 'Usuários',
            iconType: 'nzIcon',
            iconTheme: 'outline',
            icon: 'user',
            submenu: []
        },
        {
            path: '/admin/planos/todos',
            title: 'Planos',
            iconType: 'nzIcon',
            icon: 'dollar',
            iconTheme: '',
            submenu: []
        },
        {
            path: '/admin/planos/funcionalidades',
            title: 'Funcionalidades',
            iconType: 'nzIcon',
            icon: 'dollar',
            iconTheme: '',
            submenu: []
        },
        {
            path: '/admin/planos/categorias',
            title: 'Categorias',
            iconType: 'nzIcon',
            icon: 'dollar',
            iconTheme: '',
            submenu: []
        }
    ];
    //Menu Final
    menu_final = [
        {
            path: 'pages/relatorio',
            title: 'Relatórios',
            iconType: 'nzIcon',
            iconTheme: 'outline',
            icon: 'bar-chart',
            submenu: []
        },
        {
            path: 'pages/download',
            title: 'Downloads',
            iconType: 'nzIcon',
            iconTheme: 'outline',
            icon: 'download',
            submenu: []
        },
        {
            path: 'configuracoes',
            title: 'Minha Conta',
            iconType: 'nzIcon',
            iconTheme: 'outline',
            icon: 'setting',
            submenu: []
        },
        {
            path: 'pages/logs',
            title: 'Logs',
            iconType: 'nzIcon',
            iconTheme: 'outline',
            icon: 'file',
            submenu: []
        },
        {
            path: 'authentication/sign-out',
            title: 'Sair',
            iconType: 'nzIcon',
            iconTheme: 'outline',
            icon: 'poweroff',
            submenu: []
        }
    ];

    menu_financeiro = [
        {
            path: 'admin/financeiro',
            title: 'Financeiro',
            iconType: 'nzIcon',
            iconTheme: 'outline',
            icon: 'bar-chart',
            submenu: []
        },
    ]

    menu_afiliado = [
        {
            path: 'pages/cashback',
            title: 'Área do Afiliado',
            iconType: 'nzIcon',
            iconTheme: 'outline',
            icon: 'bar-chart',
            submenu: []
        },
        {
            path: 'configuracoes',
            title: 'Minha Conta',
            iconType: 'nzIcon',
            iconTheme: 'outline',
            icon: 'setting',
            submenu: []
        },
        {
            path: 'authentication/sign-out',
            title: 'Sair',
            iconType: 'nzIcon',
            iconTheme: 'outline',
            icon: 'poweroff',
            submenu: []
        }
    ]
    console.log(roles)
    //Se for Admin
    if(roles.includes('ROLE_FINANCEIRO')){
        menu = menu.concat(menu_financeiro);
    }
    if(roles.includes('ROLE_ADMIN')){
        menu = menu.concat(menu_admin, menu_final);
    //Se for Usuário comum
    }
    if(roles.includes('ROLE_DFE') ){
        menu = menu.concat(menu_farol,menu_dashboard, menu_empresa, menu_dfe, menu_final);
    //Se for Usuário comum com Drive
    }
    if(roles.includes('ROLE_DFE') && roles.includes('ROLE_DRIVE') ){
//        menu = menu.concat(menu_dashboard, menu_final);
    }
    if(roles.includes('ROLE_DRIVE') && roles.includes('ROLE_PF') ){
//        menu = menu.concat(menu_dashboard, menu_final);
    }
    if(roles.includes('ROLE_AFILIADO')){
        menu = menu.concat(menu_afiliado);
    }
}

export const ROUTES: SideNavInterface[] = menu ; 