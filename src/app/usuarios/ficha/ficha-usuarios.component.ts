import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-usuarios',
    templateUrl: './ficha-usuarios.component.html',
})

export class FichaComponent implements OnInit {
    componentName = 'Ficha do usuário';
    roles:any;
    user:any;
    user_id:any;
    ficha_id:any;
    ficha_nome = 'Carregando...'
    editUserForm:FormGroup
    registros
    ficha
    dados
    constructor(
        private ActRoute: ActivatedRoute,
        private formBuilder:FormBuilder,
        private route:Router
    ) { }

    ngOnInit(): void {
        this.ActRoute.params.subscribe(params=>{
            this.user_id = params["id"]
            this.ficha_id = params['ficha_id']
            this.getFicha(this.ficha_id);
        })
        this.initializeForms();
        this.getUsuario(2);
        this.getRegistros();

    }

    getFicha(ficha_id){
        this.ficha = [{
            id: '1',
            nome:'Musicoterapia',
            profissional:'Giovanna Lisboa'
        }]
        this.ficha_nome = this.ficha[0].nome
    }

    getRegistros(){
        this.ficha = [
            {
            ficha_id:1,
            dados:[
                {
                '0':[
                    {
                        "id":1,
                        "nome_do_campo":'Quantidade de sessões',
                        "valor_do_campo":'10'
                    },
                    {
                        "id":2,
                        "nome_do_campo":'Estímulo',
                        "valor_do_campo":'Musical'
                    },
                    {
                        "id":3,
                        "nome_do_campo":'Campo 3',
                        "valor_do_campo":'Valor 3'
                    },
                    {
                        "id":4,
                        "nome_do_campo":'Campo 4',
                        "valor_do_campo":'Valor 4'
                    }],
                1:[
                    {
                        "id":1,
                        "nome_do_campo":'Quantidade de sessões',
                        "valor_do_campo":'10'
                    },
                    {
                        "id":2,
                        "nome_do_campo":'Estímulo',
                        "valor_do_campo":'Musical'
                    },
                    {
                        "id":3,
                        "nome_do_campo":'Campo 3',
                        "valor_do_campo":'Valor 3'
                    },
                    {
                        "id":4,
                        "nome_do_campo":'Campo 4',
                        "valor_do_campo":'Valor 4'
                    }
                ]
            }
        ]
    }
]

        this.dados = this.ficha[0].dados
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

    verficha(user_id,ficha_id){
        let workspace = localStorage.getItem('workspace_name')
        this.route.navigate([workspace+'/usuarios/view/'+user_id+'/ficha/'+ficha_id])
    }

}
