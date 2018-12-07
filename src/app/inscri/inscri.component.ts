import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service' ;
import {Router} from "@angular/router";
import { User } from '../models/User.model';
@Component({
  selector: 'app-inscri',
  templateUrl: './inscri.component.html',
  styleUrls: ['./inscri.component.css']
})
export class InscriComponent implements OnInit {
  show : boolean = false ; 
  msg : string ;
  type: string ;
  user : User = new User();
  constructor(private userserv:UserService ,  private router : Router) { 
    this.user.role = "USER" ;
  }

  ngOnInit() {
  }
  Inscrire(event,passconf){
    event.preventDefault();
    if(this.user.password==passconf){
      this.userserv.mailVerif(this.user.email).subscribe(
        (data : any)=>{
          if(data.verif==true){
            this.show = true ;
            this.type="danger";
            this.msg="Email déja utiliser par un autre compte";
          }else{
            this.userserv.inscrire(this.user).subscribe(
              (data : any)=>{
                if(data.verif){
                  this.show = true ;
                  this.type="success";
                  this.msg="Inscription effectuer ave sucess" ;
                }
              }
            );
          }
        }
      );
    }else{
      this.show = true ;
      this.type="danger";
      this.msg="Confirmer votre mot de passe"
    }
  }
}
