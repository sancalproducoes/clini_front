import { Routes } from '@angular/router';

export const CommonLayout_ROUTES: Routes = [
    {
        path: ':workspace/dashboard',
        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule),
    },
    {
        path: ':workspace/usuarios',
        loadChildren: () => import('../../usuarios/usuarios.module').then(m => m.UsuariosModule),
    },
    {
        path: ':workspace/setores',
        loadChildren: () => import('../../setores/setores.module').then(m => m.SetoresModule),
    },
    {
        path: ':workspace/configuracoes',
        loadChildren: () => import('../../configuracoes/configuracoes.module').then(m => m.ConfiguracoesModule),
    },
    {
        path: ':workspace/formularios',
        loadChildren: () => import('../../formularios/formularios.module').then(m => m.FormulariosModule),
    }  

];