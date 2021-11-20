import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-homepage',
  templateUrl: './training-homepage.component.html',
  styleUrls: ['./training-homepage.component.css']
})
export class TrainingHomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#btnGlobal").click(function (){
      window.setTimeout(function (){
        window.location.href = "/homepage/singleplayer/3global";
      }, 200);
    })
  }
}
