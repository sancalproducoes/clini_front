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
        localStorage.setItem("api_key",btoa(this.loginForm.value.userName+":"+this.loginForm.value.password))
        this.workspaceSvc.getWorkspaceByName(this.workspace).subscribe(data=>{
            if(Object.values(data).length > 0){
                let workspace_id = data[0]['id'];
                localStorage.setItem("workspace_id", data[0]['id']);
                this.validLoginIntoWorkspace(workspace_id);
            }else{
                this.errorSvc.callError({status:'9999'});
            }
        }, error =>{
            this.errorSvc.callError(error);
        })
    }

    validLoginIntoWorkspace(workspace_id){
        this.UsersSvc.getCurrentUserByWorkspace(workspace_id).subscribe(data=>{
            if(Object.values(data).length > 0){
                let user_id = data[0]['id'];
                localStorage.setItem("user_data", JSON.stringify(data[0]));
                this.router.navigate(['/'+this.workspace+'/dashboard'])
            }else{
                this.errorSvc.callError({status:'9999'});
            }
        })
    }
}    