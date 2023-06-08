import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
        private actRt: ActivatedRoute
    ) { }

    ngOnInit(): void {
        console.log(this.route.url.split('/')[this.route.url.split('/').length -1])
        this.actRt.queryParams.subscribe(data=>{
            this.userType = data['user_type']
        })
        this.getAllUsers();
    }

    getAllUsers(){
        this.users = [
            {
                id:'1',
                name:'Giovanna',
                lastname:'Lisboa',
                email:'giovanna.lisboa@gmail.com',
                department:'Psico M',
                cadastro:"Funcionário",
                status:true,
            },
            {
                id:'2',
                name:'Marcos',
                lastname:'Sanches',
                email:'marcos.sanches@gmail.com',
                department:'ABA',
                cadastro:"Funcionário",
                status:true,
            },
            {
                id:'3',
                name:'Roseli',
                lastname:'Alves',
                email:'roseli.alves@gmail.com',
                department:'--',
                cadastro:"Responsável",
                status:true,
            },
        ]
    }

    newUsuario(){
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
