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
        path: ':workspace/configuracoes',
        loadChildren: () => import('../../configuracoes/configuracoes.module').then(m => m.ConfiguracoesModule),
    }  

];