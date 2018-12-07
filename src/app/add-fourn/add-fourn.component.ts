import { Component, OnInit, EventEmitter } from '@angular/core';
import { Fournisseur } from '../models/Fournisserur.model';
import { FournisseurService } from '../services/fournisseur.service';

@Component({
  selector: 'app-add-fourn',
  templateUrl: './add-fourn.component.html',
  styleUrls: ['./add-fourn.component.css']
})
export class AddFournComponent implements OnInit {
  fo : Fournisseur =new Fournisseur();
  show : boolean = false ; 
  msg : string ;
  type: string ;
  constructor(private fourService : FournisseurService) {}
  ngOnInit() {
  }
  ajouter(event){
    event.preventDefault();
    this.fourService.insert(this.fo).subscribe((data : any)=>{
      if(data.verif){
        this.show = true ;
        this.type="success";
        this.msg="Fournisseur ajouter avec sucess" ;
      }else{
        this.show = true ;
        this.type="Danger";
        this.msg="Erreur a l'ajout de Fournisseur" ;
      }
    });
  }

}
