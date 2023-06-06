import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-setores',
    templateUrl: './setores.component.html',
})

export class SetoresComponent implements OnInit {
    componentName = 'Setores';
    workspace_name = localStorage.getItem("workspace_name");
    setores:any;
    filterForm:FormGroup
    constructor(
        private route: Router,
        private form: FormBuilder
    ) { }

    ngOnInit(): void {
        this.initializeFilter();
        this.getAllSetores();
    }

    initializeFilter(){
       this.filterForm = this.form.group({
            nome: [''],
            ativo: ['1']
        })
    }

    getAllSetores(){
        this.setores = [
            {
                id:'1',
                name:'Musicoterapia',
                status:true
            },
            {
                id:'2',
                name:'Psico M.',
                status:true
            },
            {
                id:'3',
                name:'ABA',
                status:true
            },
            {
                id:'4',
                name:'Fisioterapia',
                status:true
            },
            {
                id:'5',
                name:'T.O',
                status:true
            },
            {
                id:'6',
                name:'T.C.C',
                status:true
            },
        ]
    }

    newSetor(){
        this.route.navigate([this.workspace_name+'/setores/new'])
    }

    editSetor(setor_id){
        this.route.navigate([this.workspace_name+'/setores/edit/'+setor_id])
    }

    disableSetor(setor_id){
        console.log(setor_id)
    }
}
