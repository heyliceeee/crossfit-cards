import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-core',
  templateUrl: './three-core.component.html',
  styleUrls: ['./three-core.component.css']
})
export class ThreeCoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function (){
      window.setTimeout(function (){
        window.location.href = "/homepage/singleplayer/2core";   
      }, 1000);
    });
  }

}
