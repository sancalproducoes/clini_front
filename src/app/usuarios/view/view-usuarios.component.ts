import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-usuarios',
    templateUrl: './view-usuarios.component.html',
})

export class ViewUsuariosComponent implements OnInit {
    componentName = 'Ver Usuário';
    roles:any;
    user:any;
    user_id:any;
    editUserForm:FormGroup
    registros
    constructor(
        private ActRoute: ActivatedRoute,
        private formBuilder:FormBuilder,
        private route:Router
    ) { }

    ngOnInit(): void {
        this.ActRoute.params.subscribe(params=>{
            this.user_id = params["id"]
        })
        this.initializeForms();
        this.getUsuario(2);
        this.getRegistros();
    }

    getRegistros(){
        this.registros = [
            {
                'id':'234',
                'area':'Musicoterapia',
                'profissional':'Bruno Silva',
                'ultimo_reg':'2023-06-06 14:00:00'
            },
            {
                'id':'234',
                'area':'ABA',
                'profissional':'Giovanna Lisboa',
                'ultimo_reg':'2023-06-06 14:00:00'
            },
            {
                'id':'234',
                'area':'Fonoaudiologia',
                'profissional':'Gabrielli Liria',
                'ultimo_reg':'2023-06-06 14:00:00'
            }
        ]
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

    verProgresso(user_id,setor_id){
        let workspace = localStorage.getItem('workspace_name')
        this.route.navigate([workspace+'/usuarios/view/'+user_id+'/setor/'+setor_id])
    }

}
