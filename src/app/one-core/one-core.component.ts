import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-core',
  templateUrl: './one-core.component.html',
  styleUrls: ['./one-core.component.css']
})
export class OneCoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function (){
      window.setTimeout(function (){
        window.location.href = "/homepage/singleplayer/gocore";   
      }, 1000);
    });
  }

}
