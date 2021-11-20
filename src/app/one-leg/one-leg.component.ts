import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-leg',
  templateUrl: './one-leg.component.html',
  styleUrls: ['./one-leg.component.css']
})
export class OneLegComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function (){
      window.setTimeout(function (){
        window.location.href = "/homepage/singleplayer/goleg";   
      }, 1000);
    });
  }

}
