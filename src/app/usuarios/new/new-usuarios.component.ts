import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-usuarios',
    templateUrl: './new-usuarios.component.html',
})

export class NewUsuariosComponent implements OnInit {
    componentName = 'Novo Usuário';
    roles:any;
    constructor() { }

    ngOnInit(): void {
        this.getAllRoles();

    }
    
    cadastraUsuario(){

    }

    getAllRoles(){
        this.roles = [
            {
                id:'1',
                name:'Administrador',
                status:true,
            },
            {
                id:'2',
                name:'Paciente',
                status:true,
            },
            {
                id:'3',
                name:"Colaborador",
                status:true,
            },
            {
                id:'4',
                name:"Responsável",
                status:true,
            },
        ]
    }

    editUser(user_id){
        console.log(user_id)
    }

    disableUser(user_id){
        console.log(user_id)
    }
}
