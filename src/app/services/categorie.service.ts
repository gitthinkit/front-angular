import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Api} from '../models/Api.model' ;
import { Categorie } from '../models/Categorie.model';
@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient ) { }
  getOne(id){
    return this.http.get(Api.url+'/admin/categorie/'+id,Api.config) ;
  }
  getAll(){
    return this.http.get(Api.url+'/admin/categories',Api.config) ;
  }
  insert(c :Categorie){
    return this.http.post(Api.url+'/admin/categorie/add',c,Api.config);
  }
  delete(id){
    return this.http.delete(Api.url+'/admin/categorie/delete/'+id,Api.config)
  }
  update(c :Categorie){
    return this.http.put(Api.url+'/admin/categorie/update',c,Api.config);
  }
}
