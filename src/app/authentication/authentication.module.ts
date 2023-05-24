import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

import { LoginComponent } from './login/login.component';
import { WorkspaceService } from '../shared/services/workspace.service'
import { ErrorService } from '../shared/services/error.service';
import { UsersService } from '../shared/services/users.service';
import { ForgetComponent } from './forget/forget.component';
import { HomeComponent } from './home/home.component';
const antdModule= [
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCardModule,
    NzCheckboxModule
]

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        AuthenticationRoutingModule,
        ...antdModule
    ],
    declarations: [
        LoginComponent,
        ForgetComponent,
        HomeComponent
    ],
    providers:[
        WorkspaceService,
        UsersService,
        ErrorService
    ]

})

export class AuthenticationModule {}