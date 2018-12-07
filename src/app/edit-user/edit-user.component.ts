import { Component, OnInit } from '@angular/core';
import { User } from '../models/User.model';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user : User = new User();
  show : boolean = false ; 
  msg : string ;
  type: string ;
  constructor(private userserv:UserService ,  private router : ActivatedRoute) {
    this.userserv.getUser(this.router.snapshot.params.email).subscribe((data : User)=>{
      this.user=data;
    });
  }
  ngOnInit() {}

  Modifier(event,passconf){
    event.preventDefault();
    if(this.user.password==passconf){
      this.userserv.update(this.user).subscribe(
        (data : any)=>{
          if(data.verif){
            this.show = true ;
            this.type="success";
            this.msg="Modification effectuer avec sucess" ;
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
