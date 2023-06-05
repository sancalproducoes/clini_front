import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';
import { EditUsuariosComponent } from './edit/edit-usuarios.component'
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
        path:'edit/:id',
        component: EditUsuariosComponent,
        data:{
            title:'Editar Usuário',
            headerDisplay: 'none'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsuariosRoutingModule { }
