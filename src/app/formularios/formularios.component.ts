import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-formularios',
    templateUrl: './formularios.component.html',
})

export class FormulariosComponent implements OnInit {
    componentName = 'Formulários';
    workspace_name = localStorage.getItem("workspace_name");
    formularios:any;
    userType = '';
    constructor(
        private route: Router,
        private actRt: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.getAllFormularios();
    }

    getAllFormularios(){
        this.formularios = [
            {
                id:'1',
                name:'Relatorio tipo 2',
                department_id:1,
                department_name:"ABA",
                status:true,
            },
            {
                id:'2',
                name:'Relatorio tipo 1',
                department_id:2,
                department_name:"Musicoterapia",
                status:true,
            },
            {
                id:'3',
                name:'T.C.C',
                department_id:3,
                department_name:"T.C.C",
                status:true,
            }
        ]
    }

    newFormulario(){
        this.route.navigate([this.workspace_name+'/formularios/new/'])
    }

    editFormulario(user_id){
        this.route.navigate([this.workspace_name+'/formularios/edit/'+user_id])
    }

    disableUser(user_id){
        console.log(user_id)
    }
}
