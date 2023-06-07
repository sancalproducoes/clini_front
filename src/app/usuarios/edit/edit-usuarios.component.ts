import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-usuarios',
    templateUrl: './edit-usuarios.component.html',
})

export class EditUsuariosComponent implements OnInit {
    componentName = 'Editar Usuário';
    roles:any;
    user:any;
    user_id:any;
    editUserForm:FormGroup
    constructor(
        private ActRoute: ActivatedRoute,
        private formBuilder:FormBuilder
    ) { }

    ngOnInit(): void {
        this.ActRoute.params.subscribe(params=>{
            this.user_id = params["id"]
        })
        this.getAllRoles();
        this.initializeForms();
        this.getUsuario(2);
    }

    initializeForms(){
        this.editUserForm = this.formBuilder.group({
            name:[''],
            lastname:[''],
            email:[''],
            rg:[''],
            cpf:[''],
            role_id:['2'],
            password:[""],
            c_password:[""],
            logradouro:[''],
            numero:[''],
            complemento:[''],
            bairro:[''],
            cidade:[''],
            estado:[''],
            pais:[{value:"",disabled:true}],
            cep:[''],
        })
    }
    
    getUsuario(id){
        this.user = [
            {
                id:'1',
                name:'Giovanna',
                lastname:'Lisboa',
                email:'giovanna.lisboa@gmail.com',
                rg:'112223334',
                cpf:'11122233344',
                role_id:"3",
                role_name:'Colaborador',
                logradouro:'Rua Rio Negrinho',
                numero:'119',
                complemento:'',
                bairro:'Jd. Santa Clara',
                cidade:'Guarulhos',
                estado:'São Paulo',
                pais:'Brasil',
                cep:'00000-000',
                status:true,
            },
        ]

        this.editUserForm.patchValue({
            name:[this.user[0].name],
            lastname:[this.user[0].lastname],
            email:[this.user[0].email],
            rg:[this.user[0].rg],
            cpf:[this.user[0].cpf],
            role_id:[this.user[0].role_id],
            logradouro:[this.user[0].logradouro],
            numero:[this.user[0].numero],
            complemento:[this.user[0].complemento],
            bairro:[this.user[0].bairro],
            cidade:[this.user[0].cidade],
            estado:[this.user[0].estado],
            pais:[this.user[0].pais],
            cep:[this.user[0].cep],
        })
    }

    editarUsuario(){

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
