import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-go-upper-body',
  templateUrl: './go-upper-body.component.html',
  styleUrls: ['./go-upper-body.component.css']
})
export class GoUpperBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function (){
      window.setTimeout(function (){
        window.location.href = "/homepage/singleplayer/upperbody";   
      }, 1000);
    });
  }

}
