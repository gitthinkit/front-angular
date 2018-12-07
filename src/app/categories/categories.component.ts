import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { CategorieService } from '../services/categorie.service';
import { listener } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
    categories : any ;
    show : boolean = false ; 
    msg : string ;
    type: string ;
    constructor(private catService :CategorieService,private router : Router) { }

    ngOnInit() {
       this.lister();
    }
    lister(){
        this.catService.getAll().subscribe((data:any)=>{
            this.categories=data;
        });
    }
    onSelect(id){
        this.router.navigate(["/admin/Categories", id]);
    }
    Supprimer(id){
        this.catService.delete(id).subscribe();
        this.show = true ;
        this.type="danger";
        this.msg="Categorie supprimer avec success";
    }
}
