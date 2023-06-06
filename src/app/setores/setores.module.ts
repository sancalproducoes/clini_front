import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SetoresRoutingModule } from "./setores-routing.module";
import { SetoresComponent } from './setores.component';

/** Import any ng-zorro components as the module required except icon module */
import { NzButtonModule } from 'ng-zorro-antd/button';
import { EditSetoresComponent } from './edit/edit-setores.component';
import { NewSetoresComponent } from './new/new-setores.component';

/** Assign all ng-zorro modules to this array*/
const antdModule = [
    NzButtonModule,
]

@NgModule({
    imports: [
        SharedModule,
        SetoresRoutingModule,
        ...antdModule
    ],
    exports: [],
    declarations: [
        SetoresComponent,
        EditSetoresComponent,
        NewSetoresComponent
    ]
})
export class SetoresModule { }
