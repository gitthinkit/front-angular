import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Api} from "../models/Api.model";
import {Observable} from "rxjs/index";
import {Convention} from "../models/Convention.model";


@Injectable({
  providedIn: 'root'
})
export class ConventionService {

    constructor(private http: HttpClient ) { }
    lister(){
        return this.http.get(Api.url+'/admin/Convs',Api.config);
            //.pipe(map((response:Response) => response.json()));
    }

    getOne(id){
        return this.http.get(Api.url+'/admin/Convs/'+id,Api.config) ;
    }

    insert(c :Convention){
        return this.http.post(Api.url+'/admin/addConv',c,Api.config);
    }

    /*delete(id){
        return this.http.delete(Api.url+'/admin/Convs/'+id,Api.config)
    }*/

    update(c :Convention){
        return this.http.put(Api.url+'/admin/Convs/update',c,Api.config);
    }

    errorHandler(err: HttpErrorResponse){
        if(err.error instanceof ErrorEvent){
            console.error('Client Side error', err.error.message);
        }else{
            console.error('Server Side error', err);
        }
    }
}
