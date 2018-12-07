import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../services/categorie.service';
import { Categorie } from '../models/Categorie.model';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categorie : Categorie = new Categorie();
  show : boolean = false ; 
  msg : string ;
  type: string ;
  constructor(private catService :CategorieService) { }
  ngOnInit() {
  }
  Ajouter(event){
    event.preventDefault();
    this.catService.insert(this.categorie).subscribe((data : any)=>{
      if(data.verif){
        this.show = true ;
        this.type="success";
        this.msg="Categorie ajouter avec sucess" ;
      }else{
        this.show = true ;
        this.type="Danger";
        this.msg="Erreur a l'ajout de Categorie" ;
      }
    });
  }
}
