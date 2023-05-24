import { Component } from '@angular/core'
import { UntypedFormBuilder, UntypedFormGroup,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorService } from 'src/app/shared/services/error.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { WorkspaceService } from 'src/app/shared/services/workspace.service';


@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent {
    loginForm: UntypedFormGroup;
    workspace =  "";
    submitForm(): void {
        for (const i in this.loginForm.controls) {
            this.loginForm.controls[ i ].markAsDirty();
            this.loginForm.controls[ i ].updateValueAndValidity();
        }
    }

    constructor(
        private _activatedRoute: ActivatedRoute,
        private fb: UntypedFormBuilder,
        private workspaceSvc: WorkspaceService,
        private errorSvc: ErrorService,
        private UsersSvc:UsersService,
        private router: Router
        ) {
    }

    ngOnInit(): void {
        this._activatedRoute.params.subscribe(params=>{
            this.workspace = params['workspace']
            if(this.workspace != "" || this.workspace != undefined){
                localStorage.setItem("workspace_name", this.workspace);
            }
        })
        this.loginForm = this.fb.group({
            userName: [ null, [ Validators.required ] ],
            password: [ null, [ Validators.required ] ]
        });
    }

    SubmitLogin(){
        this.workspaceSvc.getWorkspaceByName(this.workspace).subscribe(data=>{
            console.log(data)
            if(data[0]['success'] == undefined){
                localStorage.setItem("workspace_id",data[0]['id'])
                localStorage.setItem("workspace_name",data[0]['name'])
            }
            this.UsersSvc.getCurrentUserByWorkspace(data[0]['id']).subscribe(data2=>{
                console.log(data2)
                localStorage.setItem("user_data",JSON.stringify(data2[0]))
                this.router.navigate(['/'+localStorage.getItem("workspace_name")+'/dashboard'])
            },error=>{
                this.errorSvc.callError(error);
            }
            )
        },error=>{
            this.errorSvc.callError(error);
        })
    }
} 