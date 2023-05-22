import { Routes, RouterModule } from '@angular/router';

export const FullLayout_ROUTES: Routes = [
    {
        path: ':workspace',
        loadChildren: () => import('../../authentication/authentication.module').then(m => m.AuthenticationModule)
    }
];