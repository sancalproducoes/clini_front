import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';
import { EditUsuariosComponent } from './edit/edit-usuarios.component'
import { ViewUsuariosComponent } from './view/view-usuarios.component';
import { NewUsuariosComponent } from './new/new-usuarios.component';
import { MeusPacientesComponent } from './meus_pacientes/meus_pacientes.component';
import { ProgressoComponent } from './progresso/progresso-usuarios.component'
const routes: Routes = [
    {
        path: '',
        component: UsuariosComponent,
        data: {
            title: 'Usuários ',
            headerDisplay: "none"
        }
    },
    {
        path:'meus_pacientes',
        component: MeusPacientesComponent,
        data:{
            title:'',
            headerDisplay:'none'
        }
    },
    {
        path:'edit/:id',
        component: EditUsuariosComponent,
        data:{
            title:'Editar Usuário',
            headerDisplay: 'none'
        }
    },
    {
        path:'view/:id',
        component: ViewUsuariosComponent,
        data:{
            title:'Editar Usuário',
            headerDisplay: 'none'
        }
    },
    {
        path:'view/:id/setor/:setor_id',
        component: ProgressoComponent,
        data:{
            title:'Progresso de usuário',
            headerDisplay: 'none'
        }
    },
    {
        path:'new',
        component:NewUsuariosComponent,
        data:{
            title:'Novo usuário',
            headerDispay:'none'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsuariosRoutingModule { }
