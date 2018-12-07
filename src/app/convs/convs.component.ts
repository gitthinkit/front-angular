import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ConventionService} from "../services/convention.service";
import {Fournisseur} from "../models/Fournisserur.model";

@Component({
  selector: 'app-convs',
  templateUrl: './convs.component.html',
  styleUrls: ['./convs.component.css']
})
export class ConvsComponent implements OnInit {

    fourns : Fournisseur[];

    show : boolean = false ;
    msg : string ;
    type: string ;
    private convs : any ;
    constructor(private router : Router, private convService: ConventionService,private dc :ChangeDetectorRef) {

    }

    ngOnInit() {
        this.lister();
    }

    lister(){
        this.convService.lister().subscribe((data : any)=>{
            this.convs = data;
            this.dc.detectChanges();
        });
    }

    Supprimer(idConv){
        this.convService.delete(idConv).subscribe();
        this.show = true ;
        this.type="danger";
        this.msg="Categorie supprimer avec success";
    }

    onSelect(id){
        this.router.navigate(["/admin/Convs/"+id]);
    }

}
