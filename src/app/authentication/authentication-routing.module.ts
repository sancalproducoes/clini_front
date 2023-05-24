import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component'
import { HomeComponent } from './home/home.component';

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
    },
    {
        path: 'home',
        component: HomeComponent,
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
