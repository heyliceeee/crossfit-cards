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


    $("#btnLeg").click(function (){
      window.setTimeout(function (){
        window.location.href = "/homepage/singleplayer/3leg";
      }, 200);
    })


    $("#btnUpperBody").click(function (){
      window.setTimeout(function (){
        window.location.href = "/homepage/singleplayer/3upperbody";
      }, 200);
    })


    $("#btnCore").click(function (){
      window.setTimeout(function (){
        window.location.href = "/homepage/singleplayer/3core";
      }, 200);
    })


    $("#btnCardio").click(function (){
      window.setTimeout(function (){
        window.location.href = "/homepage/singleplayer/3cardio";
      }, 200);
    })
  }
}
