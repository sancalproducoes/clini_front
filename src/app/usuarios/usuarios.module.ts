import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UsuariosRoutingModule } from "./usuarios-routing.module";
import { UsuariosComponent } from './usuarios.component';

/** Import any ng-zorro components as the module required except icon module */
import { NzButtonModule } from 'ng-zorro-antd/button';

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
        UsuariosComponent
    ]
})
export class UsuariosModule { }
