import { Component, OnInit } from '@angular/core';
import {Convention} from "../models/Convention.model";
import {ConventionService} from "../services/convention.service";
import {CategorieService} from "../services/categorie.service";
import {Categorie} from "../models/Categorie.model";
import {Fournisseur} from "../models/Fournisserur.model";
import {FournisseurService} from "../services/fournisseur.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-conv',
  templateUrl: './add-conv.component.html',
  styleUrls: ['./add-conv.component.css']
})
export class AddConvComponent implements OnInit {

    conv : Convention = new Convention();
    selectedFourn : Int32Array;
    selectedCat : Int32Array;
    fourns : Fournisseur[];
    cats : Categorie [];
    show : boolean = false ;
    msg : string ;
    type: string ;
    constructor(private convService :ConventionService , private catService : CategorieService,
                private fournService : FournisseurService, private route : Router) { }
    ngOnInit() {
        this.catService.getAll().subscribe((data:any)=>{
            this.cats=data;
            this.selectedCat = this.cats[0].id;
        });


        this.fournService.getAll().subscribe((data:any)=>{
            this.fourns=data;
            this.selectedFourn = this.fourns[0].id_four;
        });

    }



    Ajouter(event){
        event.preventDefault();
        this.convService.insert(this.conv).subscribe((data : any)=>{
            if(data.verif){
                this.show = true ;
                this.type="success";
                this.msg="Categorie ajouter avec sucess" ;
                this.route.navigate(['/admin/Convs']);
            }else{
                this.show = true ;
                this.type="Danger";
                this.msg="Erreur a l'ajout de Categorie" ;
            }
        });
    }

}
