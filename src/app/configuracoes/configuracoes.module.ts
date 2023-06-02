import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ConfiguracoesRoutingModule } from "./configuracoes-routing.module";
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';

/** Import any ng-zorro components as the module required except icon module */
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

/** Assign all ng-zorro modules to this array*/
const antdModule = [
    NzButtonModule,
    NzPageHeaderModule
]

@NgModule({
    imports: [
        SharedModule,
        ConfiguracoesRoutingModule,
        ...antdModule
    ],
    exports: [],
    declarations: [
        ConfiguracoesComponent
    ]
})
export class ConfiguracoesModule { }
