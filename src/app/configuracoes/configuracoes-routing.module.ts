import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';

const routes: Routes = [
    {
        path: '',
        component: ConfiguracoesComponent,
        data: {
            title: 'Configurações',
            headerDisplay: ""
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ConfiguracoesRoutingModule { }
