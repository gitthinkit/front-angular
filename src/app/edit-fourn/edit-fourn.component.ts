import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../models/Fournisserur.model';
import { ActivatedRoute } from '@angular/router';
import { FournisseurService } from '../services/fournisseur.service';

@Component({
  selector: 'app-edit-fourn',
  templateUrl: './edit-fourn.component.html',
  styleUrls: ['./edit-fourn.component.css']
})
export class EditFournComponent implements OnInit {
  fo : Fournisseur = new Fournisseur();
  show : boolean = false ; 
  msg : string ;
  type: string ;
  constructor(private fourser : FournisseurService,private router : ActivatedRoute) { 
    fourser.getOne(this.router.snapshot.params.id).subscribe((data :Fournisseur)=>{
      this.fo = data ;
    });
  }

  ngOnInit() {
  }
  Modifier(){
    event.preventDefault();
    this.fourser.update(this.fo).subscribe((data : any)=>{
      if(data.verif){
        this.show = true ;
        this.type="success";
        this.msg="Modification effectuer avec sucess" ;
      }else{
        this.show = true ;
        this.type="danger";
        this.msg="Erreur a la modification";
      }
    });
  }
}
