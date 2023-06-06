import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-setores',
    templateUrl: './edit-setores.component.html',
})

export class EditSetoresComponent implements OnInit {
    componentName = 'Editar Setor';
    users:any;
    constructor() { }

    ngOnInit(): void {
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

    editUser(user_id){
        console.log(user_id)
    }

    disableUser(user_id){
        console.log(user_id)
    }
}
