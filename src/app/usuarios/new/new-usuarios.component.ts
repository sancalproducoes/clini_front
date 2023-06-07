import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-usuarios',
    templateUrl: './new-usuarios.component.html',
})

export class NewUsuariosComponent implements OnInit {
    componentName = 'Novo Usuário';
    roles:any;
    setores
    tipo_cadastro = 2
    constructor() { }

    ngOnInit(): void {
        this.getAllRoles();
        this.getSetores();
    }
    
    cadastraUsuario(){

    }

    getSetores(){
        this.setores = [
            {
                id:'1',
                nome:'Fono',
                colaboradores:[
                    {
                        id:1,
                        name:'Giovanna',
                        lastname:'Lisboa'
                    },
                    {
                        id:2,
                        name:'Gabrielli',
                        lastname:'Liria'
                    }
                ]
            },
            {
                id:'2',
                nome:'TCC',
                colaboradores:[]
            },
            {
                id:'3',
                nome:'ABA',
                colaboradores:[]
            },
            {
                id:'4',
                nome:'Musicoterapia',
                colaboradores:[]
            }
        ]
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
}
