import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormulariosRoutingModule } from "./formularios-routing.module";
import { FormulariosComponent } from './formularios.component';

/** Import any ng-zorro components as the module required except icon module */
import { NzButtonModule } from 'ng-zorro-antd/button';
import { EditFormulariosComponent } from './edit/edit-formularios.component';
import { NewFormulariosComponent } from './new/new-formularios.component';

/** Assign all ng-zorro modules to this array*/
const antdModule = [
    NzButtonModule,
]

@NgModule({
    imports: [
        SharedModule,
        FormulariosRoutingModule,
        ...antdModule
    ],
    exports: [],
    declarations: [
        FormulariosComponent,
        EditFormulariosComponent,
        NewFormulariosComponent
    ]
})
export class FormulariosModule { }
