import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Api} from '../models/Api.model' ;
import { Fournisseur } from '../models/Fournisserur.model';
@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  constructor(private http : HttpClient ) { }
  getOne(id){
    return this.http.get(Api.url+'/admin/fournisseur/'+id,Api.config) ;
  }
  getAll(){
    return this.http.get(Api.url+'/admin/fournisseurs',Api.config) ;
  }
  insert(f :Fournisseur){
    return this.http.post(Api.url+'/admin/fournisseur/add',f,Api.config);
  }
  delete(id){
    return this.http.delete(Api.url+'/admin/fournisseur/delete/'+id,Api.config)
  }
  update(f :Fournisseur){
    return this.http.put(Api.url+'/admin/fournisseur/update',f,Api.config);
  }
}
