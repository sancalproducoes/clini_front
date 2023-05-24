import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const APIROUTE = environment.apiUrl;
@Injectable()
export class UsersService {
    constructor(private http: HttpClient) {}

    public getCurrentUserByWorkspace(workspace_id){
        let api = localStorage.getItem("api_key");
        let headers ={
            'Authorization': 'Basic '+api
        }
        return this.http.get(`${APIROUTE}workspaces/id/`+workspace_id+'/user/',{headers:headers})
    }
}