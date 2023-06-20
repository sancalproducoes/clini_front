import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const APIROUTE = environment.apiUrl;
@Injectable()
export class WorkspaceService {
    constructor(private http: HttpClient) {}

    public getWorkspaceByName(workspace_name){
        let api = btoa('admin@clinicare.com.br:jsdk6ccp');
        let headers ={
            'Authorization': 'Basic '+api
        }
        return this.http.get(`${APIROUTE}workspaces/name/`+workspace_name,{headers:headers})
    }

}