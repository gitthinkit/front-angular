import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {Router} from "@angular/router";
import { FournisseurService } from '../services/fournisseur.service';

@Component({
  selector: 'app-fourns',
  templateUrl: './fourns.component.html',
  styleUrls: ['./fourns.component.css']
})
export class FournsComponent implements OnInit {
    fournisseurs : any ;
    show : boolean = false ; 
    msg : string ;
    type: string ;
    constructor(private fourserv : FournisseurService,private router : Router,private dc :ChangeDetectorRef) { 
        this.lister();
    }

    ngOnInit() {
    }
    lister(){
        this.fourserv.getAll().subscribe((data : any)=>{
          this.fournisseurs =data;
          this.dc.detectChanges();
        });
      }
    onSelect(id){
        this.router.navigate(["admin/Fourns", id]);
    }
    onDelete(id){
        this.fourserv.delete(id).subscribe();
    }
}
