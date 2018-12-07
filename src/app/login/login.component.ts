import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service' ;
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  show : boolean = false ; 
  msg : string ;
  type: string ;
  constructor(private userserv:UserService ,  private router : Router) { }

  ngOnInit() {
  }
  Login(event,email,password){
    event.preventDefault();
    this.userserv.mailVerif(email).subscribe((data : any)=>{
      if(data.verif){
        this.userserv.login(email,password).subscribe((data : any)=>{
          if(data.verif){
             if(data.user.role=="ADMIN")
              this.router.navigate(['admin']);
             else
              this.router.navigate(['/loged']);
          }else{
            this.show = true ;
            this.type="danger";
            this.msg="Mot de passe est incorrect " ;
          }
        });  
      }else{
        this.show = true ;
        this.type="danger";
        this.msg="Email n'existe pas " ;
      }
    });
    /*if(this.userserv.login(email,password)){
      console.log("you logged");
     // this.router.navigate(['/loged']);
    }else{
      this.erreur= true;
    }*/
  }
}
