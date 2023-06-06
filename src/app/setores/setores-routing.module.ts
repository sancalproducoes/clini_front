import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetoresComponent } from './setores.component';
import { EditSetoresComponent } from './edit/edit-setores.component'
import { NewSetoresComponent } from './new/new-setores.component'
const routes: Routes = [
    {
        path: '',
        component: SetoresComponent,
        data: {
            title: 'Setores',
            headerDisplay: "none"
        }
    },
    {
        path:'edit/:id',
        component: EditSetoresComponent,
        data:{
            title:'Editar Setor',
            headerDisplay: 'none'
        }
    },
    {
        path:'new',
        component: NewSetoresComponent,
        data:{
            title:'Novo Setor',
            headerDisplay:'none'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SetoresRoutingModule { }
