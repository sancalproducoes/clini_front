import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-usuarios',
    templateUrl: './new-ficha-usuarios.component.html',
})

export class NewFichaComponent implements OnInit {
    componentName = 'Nova ficha';
    fichaSelector:FormGroup
    user_id:any;
    user:any
    fichas:any;

    ficha_id:any;
    editUserForm:FormGroup
    ficha_selecionada
    constructor(
        private ActRoute: ActivatedRoute,
        private formBuilder:FormBuilder,
        private route:Router
    ) { }

    ngOnInit(): void {
        this.ActRoute.params.subscribe(params=>{
            this.user_id = params["id"]
            this.ficha_id = params['ficha_id']
        })
        this.initializeForms();
        this.getUsuario(2);
        this.getFichasName();
    }


    initializeForms(){
        this.editUserForm = this.formBuilder.group({
            name:[{value:""}],
            lastname:[{value:""}],
            email:[{value:""}],
            rg:[{value:""}],
            cpf:[{value:""}],
            role_name:[{value:""}],
            password:[''],
            c_password:[''],
            logradouro:[{value:""}],
            numero:[{value:""}],
            complemento:[{value:""}],
            bairro:[{value:""}],
            cidade:[{value:""}],
            estado:[{value:""}],
            pais:[{value:""}],
            cep:[{value:""}],
        })

        this.fichaSelector = this.formBuilder.group({
            ficha:['']
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
            role_name:[this.user[0].role_name],
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
    getFichasName(){
        this.fichas = [{
            id:'1',
            nome:'Ficha 1',
            status:true,
            creation_dt:'2023-06-06 13:17:00',
        },{
            id:'2',
            nome:'Ficha 2',
            status:true,
            creation_dt:'2023-06-06 13:17:00',
        },{
            id:'3',
            nome:'Ficha 3',
            status:true,
            creation_dt:'2023-06-06 13:17:00',
        },]
    }

    getFichaById(ficha_id){
        let ficha = {
            id:'1',
            nome:'Ficha 1',
            fields:[
                {
                    nome_campo:'Data',
                    tipo_campo:'3',
                    show_values:false,
                    values:''
                },
                {
                    nome_campo:'Profissional ABA',
                    tipo_campo:'1',
                    show_values:false,
                    values:''
                },
                {
                    nome_campo:'Mudou algo na rotina da criança?',
                    tipo_campo:'2',
                    show_values:true,
                    values:'sim,não'
                },
                {
                    nome_campo:'Chegou dormindo?',
                    tipo_campo:'2',
                    show_values:true,
                    values:'sim,não'
                },
                {
                    nome_campo:'Comeu?',
                    tipo_campo:'2',
                    show_values:true,
                    values:'sim,não'
                },
                {
                    nome_campo:'Horário da ultima alimentação?',
                    tipo_campo:'1',
                    show_values:false,
                    values:''
                },
                {
                    nome_campo:'Machucados/quedas?',
                    tipo_campo:'2',
                    show_values:true,
                    values:'sim,não'
                },
                {
                    nome_campo:'Dormiu no horário habitual?',
                    tipo_campo:'2',
                    show_values:true,
                    values:'sim,não'
                },
                {
                    nome_campo:'observações?',
                    tipo_campo:'4',
                    show_values:false,
                    values:''
                }
            ],
            status:true,
            creation_dt:'2023-06-06 13:17:00',
        }

        return ficha
    }

    selectFicha(event){
        if(event != '0'){
            this.ficha_selecionada = this.getFichaById(event);
        }else{
            this.ficha_selecionada = []
        }
    }

}
