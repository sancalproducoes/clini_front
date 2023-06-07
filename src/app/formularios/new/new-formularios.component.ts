import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-formularios',
    templateUrl: './new-formularios.component.html',
})

export class NewFormulariosComponent implements OnInit {
    componentName = 'Novo Formulário';
    fields = []
    formularioForm: FormGroup
    constructor(
        private formbuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.initializeForm();
    }

    initializeForm(){
        this.formularioForm = this.formbuilder.group({
            nome:'',
            departamento:''
        })
    }

    removeField(index){
        console.log('o index é: '+index)
        this.fields.splice(index,1);
        console.log(this.fields)
    }

    changeData(i,event,field){
        if(field == 'nome_campo'){
            this.fields[i].nome_campo = event.target.value;
        }
        if(field == 'values'){
            this.fields[i].values = event.target.value;
        }
    }

    changeSelectForm(event,index){
        console.log(event)
        console.log('mudou')
        if(event == 2){
            this.fields[index].show_values = true
        }else{
            this.fields[index].show_values = false
        }
        console.log(this.fields)
    }

    addField(){
        this.fields.push(
            {
                nome_campo:'',
                tipo_campo:'',
                show_values:false,
                values:''
            }
        )
    }


    cadastrarFormulario(){
        console.log(this.fields)
    }
}
