import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-global-training',
  templateUrl: './global-training.component.html',
  styleUrls: ['./global-training.component.css']
})
export class GlobalTrainingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function(){

      alert('jquery instalado');

      var path = 'https://cdn3.iconfinder.com/data/icons/card-games-colored/48/',
    images = ['Games_CardGames_Artboard_64-512.png', 'Games_CardGames_Artboard_79-512.png'],
    i = Math.floor(Math.random()*images.length);

    $('.global-cards').append("<img src='"+path+images[i]+"'>").hide().fadeIn(2000);
    });
  }
}
