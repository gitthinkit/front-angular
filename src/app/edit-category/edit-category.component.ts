import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../services/categorie.service';
import { Categorie } from '../models/Categorie.model';
import { ActivatedRoute, Routes, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  categorie : Categorie = new Categorie();
  show : boolean = false ; 
  msg : string ;
  type: string ;
  constructor(private catService : CategorieService , private router : ActivatedRoute , private route : Router) {
    this.catService.getOne(this.router.snapshot.params.id).subscribe((data : Categorie)=>{
      this.categorie=data;
    });
  }

  ngOnInit() {
  }
  modifier(event){
    event.preventDefault();
    this.catService.update(this.categorie).subscribe((data : any)=>{
      if(data.verif){
        this.show = true ;
        this.type="success";
        this.msg="Modification effectuer avec sucess" ;
        this.route.navigate(['/admin/Categories']);
      }else{
        this.show = true ;
        this.type="danger";
        this.msg="Erreur a la modification";
      }
    });
  }
}
