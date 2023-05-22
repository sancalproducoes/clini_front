import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component'

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        data: {
            title: 'Login'
        }
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {
            title: 'Login'
        }
    },
    {
        path: 'esqueceu-a-senha',
        component: ForgetComponent,
        data: {
            title: 'Esqueceu'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthenticationRoutingModule { }
