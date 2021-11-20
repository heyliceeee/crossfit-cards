import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-cardio',
  templateUrl: './three-cardio.component.html',
  styleUrls: ['./three-cardio.component.css']
})
export class ThreeCardioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function (){
      window.setTimeout(function (){
        window.location.href = "/homepage/singleplayer/2cardio";   
      }, 1000);
    });
  }

}
