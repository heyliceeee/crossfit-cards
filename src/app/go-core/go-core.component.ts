import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-go-core',
  templateUrl: './go-core.component.html',
  styleUrls: ['./go-core.component.css']
})
export class GoCoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function (){
      window.setTimeout(function (){
        window.location.href = "/homepage/singleplayer/core";   
      }, 1000);
    });
  }

}
