import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-leg',
  templateUrl: './two-leg.component.html',
  styleUrls: ['./two-leg.component.css']
})
export class TwoLegComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function (){
      window.setTimeout(function (){
        window.location.href = "/homepage/singleplayer/1leg";   
      }, 1000);
    });
  }

}
