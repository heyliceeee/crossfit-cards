import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-upper-body',
  templateUrl: './one-upper-body.component.html',
  styleUrls: ['./one-upper-body.component.css']
})
export class OneUpperBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function (){
      window.setTimeout(function (){
        window.location.href = "/homepage/singleplayer/goupperbody";   
      }, 1000);
    });
  }

}
