import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UsuariosRoutingModule } from "./usuarios-routing.module";
import { UsuariosComponent } from './usuarios.component';
import { ViewUsuariosComponent } from './view/view-usuarios.component';

/** Import any ng-zorro components as the module required except icon module */
import { NzButtonModule } from 'ng-zorro-antd/button';
import { EditUsuariosComponent } from './edit/edit-usuarios.component';
import { NewUsuariosComponent } from './new/new-usuarios.component';
import { MeusPacientesComponent } from './meus_pacientes/meus_pacientes.component'
import { ProgressoComponent } from './progresso/progresso-usuarios.component';
import { FichaComponent } from './ficha/ficha-usuarios.component';
import { NewFichaComponent } from './ficha/new/new-ficha-usuarios.component'
import { UsersService } from '../shared/services/users.service';

/** Assign all ng-zorro modules to this array*/
const antdModule = [
    NzButtonModule,
]

@NgModule({
    imports: [
        SharedModule,
        UsuariosRoutingModule,
        ...antdModule
    ],
    exports: [],
    declarations: [
        UsuariosComponent,
        EditUsuariosComponent,
        NewUsuariosComponent,
        MeusPacientesComponent,
        ViewUsuariosComponent,
        ProgressoComponent,
        FichaComponent,
        NewFichaComponent
    ],
    providers: [
        UsersService
    ],
})
export class UsuariosModule { }
