import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-go-leg',
  templateUrl: './go-leg.component.html',
  styleUrls: ['./go-leg.component.css']
})
export class GoLegComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function (){
      window.setTimeout(function (){
        window.location.href = "/homepage/singleplayer/leg";   
      }, 1000);
    });
  }

}
