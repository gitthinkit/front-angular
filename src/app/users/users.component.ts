import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from '../services/user.service' ;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users : any ;
  show : boolean = false ; 
  msg : string ;
  type: string ;
  constructor(private userserv:UserService ,private router : Router ,private dc :ChangeDetectorRef) { }

  ngOnInit() {
    this.lister();
  }
  lister(){
    this.userserv.listeUser().subscribe((data : any)=>{
      this.users=data;
      this.dc.detectChanges();
    });
  }
  onSelect(email){
    this.router.navigate(["/admin/Users", email]);
  }
  Supprimer(email){
    this.userserv.supprimerUser(email).subscribe();
    this.show = true ;
    this.type="success";
    this.msg="Utilisateur supprimer avec sucess " ;
    this.lister();
    
  }
}
