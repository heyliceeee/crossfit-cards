import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-global-training',
  templateUrl: './global-training.component.html',
  styleUrls: ['./global-training.component.css']
})
export class GlobalTrainingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var path = 'https://cdn3.iconfinder.com/data/icons/card-games-colored/48/';
    var images = ['Games_CardGames_Artboard_64-512.png', 'Games_CardGames_Artboard_79-512.png'];
    var i = Math.floor(Math.random()*images.length);

    $('.global-cards').append("<img src='"+path+images[i]+"'>").hide().fadeIn(2000);
    
  }

}
