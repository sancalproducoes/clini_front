import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-setores',
    templateUrl: './new-setores.component.html',
})

export class NewSetoresComponent implements OnInit {
    componentName = 'Novo Setor';
    users:any;
    newSetorForm: FormGroup
    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.initializeForms();
    }

    initializeForms(){
        this.newSetorForm = this.formBuilder.group({
            nome: '',
            descricao: ''
        })
    }

    cadastraSetor(){

    }

}
