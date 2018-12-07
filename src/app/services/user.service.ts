import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Api } from  '../models/Api.model' ;
import { User }  from '../models/User.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient  ) { }
  login(email:string , pass :string){
    return this.http.post(Api.url+"/login",{'email':email,'password':pass},Api.config);
  }
  mailVerif(email){
    return this.http.post(Api.url+"/all/mail_existe",{'email':email},Api.config);
  }
  inscrire(u :User){
    return this.http.post(Api.url+"/inscrire",u,Api.config);
  }
  listeUser(){
    return this.http.get(Api.url+"/admin/users",Api.config);
  }
  supprimerUser(email){
    return this.http.delete(Api.url+"/admin/user/delete/"+email,Api.config);
  }
  getUser(email){
    return this.http.get(Api.url+"/admin/user/"+email,Api.config);
  }
  update(u : User){
    return this.http.put(Api.url+"/admin/user/update",u,Api.config);
  }
}
