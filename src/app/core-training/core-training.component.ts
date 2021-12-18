import { Component, OnInit } from '@angular/core';
import Timer from 'easytimer.js';

@Component({
  selector: 'app-core-training',
  templateUrl: './core-training.component.html',
  styleUrls: ['./core-training.component.css']
})
export class CoreTrainingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(window).ready(() =>{

      var path = '../assets/cards/',

        images = ['2heart.png',
        '3heart.png',
        '4heart.png',
        '5heart.png',
        '6heart.png', 
        '7heart.png',
        '8heart.png', 
        '9heart.png', 
        '10heart.png',
        'aheart.png',
        'jackheart.png', 
        'kingheart.png',
        'queenheart.png',
        'joker.png'],

      tips = ['sit-ups 2 reps',
        'sit-ups 3 reps',
        'sit-ups 4 reps',
        'sit-ups 5 reps',
        'sit-ups 6 reps',
        'sit-ups 7 reps',
        'sit-ups 8 reps',
        'sit-ups 9 reps',
        'sit-ups 10 reps',
        'sit-ups 20 reps',
        'sit-ups 11 reps',
        'sit-ups 13 reps',
        'sit-ups 12 reps',
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


      $('.image-core-cards').append("<img src='"+path+images[i]+"'>").hide().fadeIn(2000);
      $('.tip-core-cards').append("Tip: "+tips[i]);
      $('.score-core-cards').append("Score: "+score[i]);

      
      //time and time break
      const coreTimerGame = new Timer();

      $('#corePlayTime').click(function (){
        coreTimerGame.start();
      });

      coreTimerGame.addEventListener('secondsUpdated', function (e) {
        $('#coreTimeGame').html('Time: ' + coreTimerGame.getTimeValues().toString());
      });

      coreTimerGame.addEventListener('started', function (e) {
        $('#coreTimeGame').html('Time: '+ coreTimerGame.getTimeValues().toString());
    });

      const coreTimerBreak = new Timer();

      $('#corePlayBreak').click(function () {
        coreTimerGame.pause();
        coreTimerBreak.start();

        var resultcoreTimerGame = coreTimerGame.getTimeValues().toString();
        console.log(resultcoreTimerGame);
      });


      $('#corePauseBreak').click(function () {
        coreTimerBreak.pause();
        coreTimerGame.start();

        var resultcoreTimerBreak = coreTimerBreak.getTimeValues().toString();
        console.log(resultcoreTimerBreak);
      });

      coreTimerBreak.addEventListener('secondsUpdated', function (e) {
        $('#coreTimeBreak').html(coreTimerBreak.getTimeValues().toString());
      });
  
      coreTimerBreak.addEventListener('started', function (e) {
        $('#coreTimeBreak').html(coreTimerBreak.getTimeValues().toString());
      });
      //end time and time break


      //when click nextCard button 
      $("#nextCard").click(function (){

        var str_n = localStorage.getItem('counterNextCard');
        var coreScore = localStorage.getItem('coreScore');
        
        
        if (str_n == null || str_n == "null") {

          str_n = "0";
          n = 0;
          coreScore = "0";
          

          //tenho de colocar 13 uns
        /* } else if (str_n == "0111"){

          var n = parseInt(str_n);

          //tenho de colocar a ir para pagina de estatistica
          window.location.href = "homepage/statistics";

        */}  else {

          var n = parseInt(str_n);
          n++;
          str_n = str_n + 1;

          coreScore = ""+score[i];
        }


        console.log("valor de n: "+n);
        localStorage.setItem("counterNextCard", str_n);
        console.log("Score: "+coreScore);

        //reset localStorage
        //localStorage.clear();


        $('#divScore').load(location.href + "#divScore");
        $('.coreScoreCardsTest').append(""+coreScore);
      });
  });
  }
}
