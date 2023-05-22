import { Component } from '@angular/core'
import { UntypedFormBuilder, UntypedFormGroup,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorService } from 'src/app/shared/services/error.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { WorkspaceService } from 'src/app/shared/services/workspace.service';


@Component({
    templateUrl: './forget.component.html'
})

export class ForgetComponent {
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
        });
    }

}    