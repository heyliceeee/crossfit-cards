import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CardTip } from './cards'
import { Timer } from 'easytimer.js';

@Component({
  selector: 'app-global-training',
  templateUrl: './global-training.component.html',
  styleUrls: ['./global-training.component.css']
})
export class GlobalTrainingComponent implements OnInit {
  
  cardTips: CardTip[] = [];

  ngOnInit(): void {
  
    $(window).ready(() =>{

      var path = '../assets/cards/',

        images = ['2clubs.png', '2diamond.png', '2heart.png', '2spades.png', 
        '3clubs.png', '3diamond.png', '3heart.png', '3spades.png',
        '4clubs.png', '4diamond.png', '4heart.png', '4spades.png',
        '5clubs.png', '5diamond.png', '5heart.png', '5spades.png', 
        '6clubs.png', '6diamond.png', '6heart.png', '6spades.png', 
        '7clubs.png', '7diamond.png', '7heart.png', '7spades.png', 
        '8clubs.png', '8diamond.png', '8heart.png', '8spades.png', 
        '9clubs.png', '9diamond.png', '9heart.png', '9spades.png', 
        '10clubs.png', '10diamond.png', '10heart.png', '10spades.png', 
        'aclubs.png', 'adiamond.png', 'aheart.png', 'aspades.png',
        'jackclubs.png', 'jackdiamond.png', 'jackheart.png', 'jackspades.png', 
        'kingclubs.png', 'kingdiamond.png', 'kingheart.png', 'kingspades.png', 
        'queenclubs.png', 'queendiamond.png', 'queenheart.png', 'queenspades.png',
        'joker.png'],

      tips = ['squats 2 reps', 'jumping jacks 2 reps', 'sit-ups 2 reps', 'push up 2 reps',
        'squats 3 reps', 'jumping jacks 3 reps', 'sit-ups 3 reps', 'push up 3 reps',
        'squats 4 reps', 'jumping jacks 4 reps', 'sit-ups 4 reps', 'push up 4 reps',
        'squats 5 reps', 'jumping jacks 5 reps', 'sit-ups 5 reps', 'push up 5 reps',
        'squats 6 reps', 'jumping jacks 6 reps', 'sit-ups 6 reps', 'push up 6 reps',
        'squats 7 reps', 'jumping jacks 7 reps', 'sit-ups 7 reps', 'push up 7 reps',
        'squats 8 reps', 'jumping jacks 8 reps', 'sit-ups 8 reps', 'push up 8 reps',
        'squats 9 reps', 'jumping jacks 9 reps', 'sit-ups 9 reps', 'push up 9 reps',
        'squats 10 reps', 'jumping jacks 10 reps', 'sit-ups 10 reps', 'push up 10 reps',
        'squats 20 reps', 'jumping jacks 20 reps', 'sit-ups 20 reps', 'push up 20 reps',
        'squats 11 reps', 'jumping jacks 11 reps', 'sit-ups 11 reps', 'push up 11 reps',
        'squats 13 reps', 'jumping jacks 13 reps', 'sit-ups 13 reps', 'push up 13 reps',
        'squats 12 reps', 'jumping jacks 12 reps', 'sit-ups 12 reps', 'push up 12 reps',
        'last exercise 30 reps'],

      score = [4, 4, 4, 4,
        6, 6, 6, 6, 
        8, 8, 8, 8,
        10, 10, 10, 10,
        12, 12, 12, 12, 
        14, 14, 14, 14, 
        16, 16, 16, 16, 
        18, 18, 18, 18, 
        20, 20, 20, 20, 
        40, 40, 40, 40,
        22, 22, 22, 22, 
        26, 26, 26, 26, 
        24, 24, 24, 24,
        60
      ],

      i = Math.floor(Math.random()*images.length);


      $('.image-global-cards').append("<img src='"+path+images[i]+"'>").hide().fadeIn(2000);
      $('.tip-global-cards').append("Tip: "+tips[i]);
      $('.score-global-cards').append("Score: "+score[i]);

      
      //time and time break
      const globalTimerGame = new Timer();

      $('#globalPlayTime').click(function (){
        globalTimerGame.start();
      });

      globalTimerGame.addEventListener('secondsUpdated', function (e) {
        $('#globalTimeGame').html('Time: ' + globalTimerGame.getTimeValues().toString());
      });

      globalTimerGame.addEventListener('started', function (e) {
        $('#globalTimeGame').html('Time: '+ globalTimerGame.getTimeValues().toString());
    });

      const globalTimerBreak = new Timer();

      $('#globalPlayBreak').click(function () {
        globalTimerGame.pause();
        globalTimerBreak.start();

        var resultglobalTimerGame = globalTimerGame.getTimeValues().toString();
        console.log(resultglobalTimerGame);
      });


      $('#globalPauseBreak').click(function () {
        globalTimerBreak.pause();
        globalTimerGame.start();

        var resultglobalTimerBreak = globalTimerBreak.getTimeValues().toString();
        console.log(resultglobalTimerBreak);
      });

      globalTimerBreak.addEventListener('secondsUpdated', function (e) {
        $('#globalTimeBreak').html(globalTimerBreak.getTimeValues().toString());
      });
  
      globalTimerBreak.addEventListener('started', function (e) {
        $('#globalTimeBreak').html(globalTimerBreak.getTimeValues().toString());
      });
      //end time and time break


      //when click nextCard button 
      $("#nextCard").click(function (){

        var str_n = localStorage.getItem('counterNextCard');
        var globalScore = localStorage.getItem('globalScore');
        
        
        if (str_n == null || str_n == "null") {

          str_n = "0";
          n = 0;
          globalScore = "0";
          

          //tenho de colocar 52 uns
        /* } else if (str_n == "0111"){

          var n = parseInt(str_n);

          //tenho de colocar a ir para pagina de estatistica
          window.location.href = "homepage/statistics";

        */}  else {

          var n = parseInt(str_n);
          n++;
          str_n = str_n + 1;

          globalScore = ""+score[i];
        }


        console.log("valor de n: "+n);
        localStorage.setItem("counterNextCard", str_n);
        console.log("Score: "+globalScore);

        //reset localStorage
        //localStorage.clear();


        $('#divScore').load(location.href + "#divScore");
        $('.globalScoreCardsTest').append(""+globalScore);
      });
  });
  }
  
}