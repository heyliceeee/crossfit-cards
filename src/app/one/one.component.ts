import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function (){
      window.setTimeout(function (){
        window.location.href = "/homepage/singleplayer/goglobal";   
      }, 1000);
    });
  }

}
