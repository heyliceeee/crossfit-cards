import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function (){
      window.setTimeout(function (){
        window.location.href = "/homepage/singleplayer/2global";   
      }, 1000);
    });
  }

}
