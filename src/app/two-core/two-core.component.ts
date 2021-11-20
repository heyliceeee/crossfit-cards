import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-core',
  templateUrl: './two-core.component.html',
  styleUrls: ['./two-core.component.css']
})
export class TwoCoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function (){
      window.setTimeout(function (){
        window.location.href = "/homepage/singleplayer/1core";   
      }, 1000);
    });
  }

}
