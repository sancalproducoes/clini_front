import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-setores',
    templateUrl: './edit-setores.component.html',
})

export class EditSetoresComponent implements OnInit {
    componentName = 'Editar Setor';
    setor_id:any;
    setor:any
    editSetorForm: FormGroup
    constructor(
        private act: ActivatedRoute,
        private formbuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.initializeForms();
        this.act.params.subscribe(
            (params) => {
                this.setor_id = params['id'];
                this.getSetor(this.setor_id);
            }
        )
    }

    initializeForms(){
        this.editSetorForm = this.formbuilder.group({
            id:[''],
            name:[''],
            descricao:[''],
        })
    }

    getSetor(setor_id){
        this.setor = {
            id:"1",
            name:"Setor Top",
            descricao:"Esse eh um setor top",
            status:true
        }

        this.editSetorForm.patchValue({
            id: this.setor.id,
            name: this.setor.name,
            descricao: this.setor.descricao
        });
    }

    editaSetor(){

    }
}
