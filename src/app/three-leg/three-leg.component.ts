import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-leg',
  templateUrl: './three-leg.component.html',
  styleUrls: ['./three-leg.component.css']
})
export class ThreeLegComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function (){
      window.setTimeout(function (){
        window.location.href = "/homepage/singleplayer/2leg";   
      }, 1000);
    });
  }

}
