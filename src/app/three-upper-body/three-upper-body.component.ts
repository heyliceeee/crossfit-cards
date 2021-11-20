import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-upper-body',
  templateUrl: './three-upper-body.component.html',
  styleUrls: ['./three-upper-body.component.css']
})
export class ThreeUpperBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function (){
      window.setTimeout(function (){
        window.location.href = "/homepage/singleplayer/2upperbody";   
      }, 1000);
    });
  }

}
