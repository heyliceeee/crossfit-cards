import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-upper-body',
  templateUrl: './two-upper-body.component.html',
  styleUrls: ['./two-upper-body.component.css']
})
export class TwoUpperBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function (){
      window.setTimeout(function (){
        window.location.href = "/homepage/singleplayer/1upperbody";   
      }, 1000);
    });
  }

}
