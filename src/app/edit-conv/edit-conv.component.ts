import { Component, OnInit } from '@angular/core';
import {Convention} from "../models/Convention.model";
import {ConventionService} from "../services/convention.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-conv',
  templateUrl: './edit-conv.component.html',
  styleUrls: ['./edit-conv.component.css']
})
export class EditConvComponent implements OnInit {
    conv : Convention = new Convention();
    show : boolean = false ;
    msg : string ;
    type: string ;
    constructor(private convService : ConventionService , private router : ActivatedRoute) {
        this.convService.getOne(this.router.snapshot.params.id).subscribe((data : Convention)=>{
            this.conv=data;
        });
    }

  ngOnInit() {
  }

    modifier(event){
        event.preventDefault();
        this.convService.update(this.conv).subscribe((data : any)=>{
            if(data.verif){
                this.show = true ;
                this.type="success";
                this.msg="Modification effectueé avec sucess" ;
            }else{
                this.show = true ;
                this.type="danger";
                this.msg="Erreur a la modification";
            }
        });
    }

}
