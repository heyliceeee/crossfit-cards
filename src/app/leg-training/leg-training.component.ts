import { Component, OnInit } from '@angular/core';
import { Timer } from 'easytimer.js';

@Component({
  selector: 'app-leg-training',
  templateUrl: './leg-training.component.html',
  styleUrls: ['./leg-training.component.css']
})
export class LegTrainingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(window).ready(() =>{

      var path = '../assets/cards/',

        images = ['2clubs.png',
        '3clubs.png', 
        '4clubs.png', 
        '5clubs.png', 
        '6clubs.png', 
        '7clubs.png', 
        '8clubs.png', 
        '9clubs.png', 
        '10clubs.png',
        'aclubs.png',
        'jackclubs.png',
        'kingclubs.png', 
        'queenclubs.png',
        'joker.png'],

      tips = ['squats 2 reps',
        'squats 3 reps',
        'squats 4 reps', 
        'squats 5 reps', 
        'squats 6 reps', 
        'squats 7 reps', 
        'squats 8 reps', 
        'squats 9 reps', 
        'squats 10 reps',
        'squats 20 reps', 
        'squats 11 reps', 
        'squats 13 reps', 
        'squats 12 reps',
        'last exercise 30 reps'],

      score = [4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20,
        40,
        22,
        26,
        24,
        60
      ],

      i = Math.floor(Math.random()*images.length);


      $('.image-leg-cards').append("<img src='"+path+images[i]+"'>").hide().fadeIn(2000);
      $('.tip-leg-cards').append("Tip: "+tips[i]);
      $('.score-leg-cards').append("Score: "+score[i]);

      
      //time and time break
      const legTimerGame = new Timer();

      $('#legPlayTime').click(function (){
        legTimerGame.start();
      });

      legTimerGame.addEventListener('secondsUpdated', function (e) {
        $('#legTimeGame').html('Time: ' + legTimerGame.getTimeValues().toString());
      });

      legTimerGame.addEventListener('started', function (e) {
        $('#legTimeGame').html('Time: '+ legTimerGame.getTimeValues().toString());
    });

      const legTimerBreak = new Timer();

      $('#legPlayBreak').click(function () {
        legTimerGame.pause();
        legTimerBreak.start();

        var resultlegTimerGame = legTimerGame.getTimeValues().toString();
        console.log(resultlegTimerGame);
      });


      $('#legPauseBreak').click(function () {
        legTimerBreak.pause();
        legTimerGame.start();

        var resultlegTimerBreak = legTimerBreak.getTimeValues().toString();
        console.log(resultlegTimerBreak);
      });

      legTimerBreak.addEventListener('secondsUpdated', function (e) {
        $('#legTimeBreak').html(legTimerBreak.getTimeValues().toString());
      });
  
      legTimerBreak.addEventListener('started', function (e) {
        $('#legTimeBreak').html(legTimerBreak.getTimeValues().toString());
      });
      //end time and time break


      //when click nextCard button 
      $("#nextCard").click(function (){

        var str_n = localStorage.getItem('counterNextCard');
        var legScore = localStorage.getItem('legScore');
        
        
        if (str_n == null || str_n == "null") {

          str_n = "0";
          n = 0;
          legScore = "0";
          

          //tenho de colocar 13
        /* } else if (str_n == "0111"){

          var n = parseInt(str_n);

          //tenho de colocar a ir para pagina de estatistica
          window.location.href = "homepage/singleplayer/statistics";

        */}  else {

          var n = parseInt(str_n);
          n++;
          str_n = str_n + 1;

          legScore = ""+score[i];
        }


        console.log("valor de n: "+n);
        localStorage.setItem("counterNextCard", str_n);
        console.log("Score: "+legScore);

        //reset localStorage
        //localStorage.clear();


        $('#divScore').load(location.href + "#divScore");
        $('.legScoreCardsTest').append(""+legScore);
      });
  });
  }
}
