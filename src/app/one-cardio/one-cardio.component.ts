import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-cardio',
  templateUrl: './one-cardio.component.html',
  styleUrls: ['./one-cardio.component.css']
})
export class OneCardioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function (){
      window.setTimeout(function (){
        window.location.href = "/homepage/singleplayer/gocardio";   
      }, 1000);
    });
  }

}
