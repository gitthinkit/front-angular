import {Component, OnInit} from '@angular/core';

declare var jQuery : any;
declare var $ : any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    public ngOnInit(){
        $(document).ready(function(){
            $(window).scroll(function(){
                if($(document).scrollTop()>25){
                    $('#nav').addClass('bg-light');
                    $('#nav').removeClass('nav-scroll');
                }
                else{
                    $('#nav').addClass('nav-scroll');
                    $('#nav').removeClass('bg-light');
                }
            })
        });
    }

    title = 'Project';
}
