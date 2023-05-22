import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageComponent, NzMessageService } from 'ng-zorro-antd/message';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const APIROUTE = environment.apiUrl;
@Injectable()
export class ErrorService {
    constructor(
        private http: HttpClient,
        private message: NzMessageService,
        private router: Router
        ) {}

    public callError(error){
        if(error.status == 400){
            return this.message.create('error','Solicitação Inválida',{nzDuration:15000});
        }else if(error['status'] == 401){
            this.router.navigate['/'+localStorage.getItem("workspace_name")+'/login-2']
            return this.message.create('error','Usuário ou senha inválidos',{nzDuration:15000});
        }else if(error['status'] == 403){
            return this.message.create('error','Acesso negado',{nzDuration:15000});
        }else if(error['status'] == 408){
            return this.message.create('error','Tempo de requisição esgotado',{nzDuration:15000});
        }else if(error['status'] == 500){
            return this.message.create('error','Erro interno do servidor',{nzDuration:15000});
        }else if(error['status'] == 502){
            return this.message.create('error','Erro interno do servidor',{nzDuration:15000});
        }else if(error['status'] == 503){
            return this.message.create('error','Serviço indisponivel, tente novamente mais tarde',{nzDuration:15000});
        }else if(error['status'] == 508){
            return this.message.create('error','Serviço indisponivel, tente novamente mais tarde',{nzDuration:15000});
        }else if(error['status'] == 9999){
            return this.message.create('error','Workspace não foi encontrado',{nzDuration:15000});
        }
        else{
            return this.message.create('error','Ocorreu um erro, tente novamente mais tarde',{nzDuration:15000});
        }
    }
}