import { Component } from '@angular/core'
import { UntypedFormBuilder, UntypedFormGroup,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageComponent, NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
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
        private router: Router,
        private message:NzMessageService
        ) {
    }

    ngOnInit(): void {
        this._activatedRoute.params.subscribe(params=>{
            this.workspace = params['workspace']
            if(this.workspace != "" || this.workspace != undefined){
                localStorage.setItem("workspace_name", this.workspace);
            }
            this.getWorkspaceByName()
        })
        this.loginForm = this.fb.group({
            userName: [ null, [ Validators.required ] ],
            password: [ null, [ Validators.required ] ]
        });
    }

    getWorkspaceByName(){
        this.workspaceSvc.getWorkspaceByName(this.workspace).subscribe(
            (res:any)=>{
                localStorage.setItem("workspace_id", res[0].id);
                localStorage.setItem("workspace_name", res[0].name);
                this.message.success("Workspace encontrado com sucesso")
            },
            (error:any)=>{
                this.errorSvc.callError(error)
            }
        )
    }

    SubmitLogin(){
        localStorage.setItem('api_key', btoa(this.loginForm.value.userName+':'+this.loginForm.value.password))
        let workspace_id = localStorage.getItem("workspace_id");
        this.UsersSvc.getCurrentUserByWorkspace(workspace_id).subscribe(
            (res:any)=>{
                console.log(res)
                let userData = res;
                localStorage.setItem("menu_reload",'0')
                localStorage.setItem("userdata", JSON.stringify(userData));
                this.redirectUser(userData);
            },(error:any)=>{
            this.errorSvc.callError(error)
        })
    }

    redirectUser(userData){
        if(userData.roles.includes("ROLE_ADMIN")){
            this.router.navigate([localStorage.getItem("workspace_name")+"/usuarios"])
        }else
        if(userData.roles.includes("ROLE_COLABORADOR")){
            this.router.navigate([localStorage.getItem("workspace_name")+"/usuarios/meus_pacientes"])
        }else{
            this.message.create("error","Algo de errado aconteceu, tente novamente mais tarde")
        }
    }
} 