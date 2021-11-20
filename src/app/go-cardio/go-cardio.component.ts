import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-go-cardio',
  templateUrl: './go-cardio.component.html',
  styleUrls: ['./go-cardio.component.css']
})
export class GoCardioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function (){
      window.setTimeout(function (){
        window.location.href = "/homepage/singleplayer/cardio";   
      }, 1000);
    });
  }

}
