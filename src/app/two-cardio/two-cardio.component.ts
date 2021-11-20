import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-cardio',
  templateUrl: './two-cardio.component.html',
  styleUrls: ['./two-cardio.component.css']
})
export class TwoCardioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function (){
      window.setTimeout(function (){
        window.location.href = "/homepage/singleplayer/1cardio";   
      }, 1000);
    });
  }

}
