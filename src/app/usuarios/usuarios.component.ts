import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../shared/services/users.service';

@Component({
    selector: 'app-usuarios',
    templateUrl: './usuarios.component.html',
})

export class UsuariosComponent implements OnInit {
    componentName = 'Usuários';
    workspace_name = localStorage.getItem("workspace_name");
    users:any;
    userType = '';
    constructor(
        private route: Router,
        private actRt: ActivatedRoute,
        private UsersSvc: UsersService
    ) { }

    ngOnInit(): void {
        this.actRt.queryParams.subscribe(data=>{
            if(data['user_type'] != undefined){
                this.userType = data['user_type']
            }else{
                this.userType = 'todos'
            }

        })
        this.getUsers(this.userType);
    }

    getUsers(userType){
        this.UsersSvc.getUsers(userType).subscribe((res:any)=>{
            this.users = res;
        });
    }

    newUser(){
        this.route.navigate([this.workspace_name+'/usuarios/new/'])
    }

    viewUser(user_id){
        this.route.navigate([this.workspace_name+'/usuarios/view/'+user_id])
    }

    editUser(user_id){
        this.route.navigate([this.workspace_name+'/usuarios/edit/'+user_id])
    }

    disableUser(user_id){
        console.log(user_id)
    }
}
