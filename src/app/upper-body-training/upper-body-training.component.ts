import { Component, OnInit } from '@angular/core';
import { Timer } from 'easytimer.js';

@Component({
  selector: 'app-upper-body-training',
  templateUrl: './upper-body-training.component.html',
  styleUrls: ['./upper-body-training.component.css']
})
export class UpperBodyTrainingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(window).ready(() =>{

      var path = '../assets/cards/',

        images = ['2spades.png', 
        '3spades.png',
        '4spades.png',
        '5spades.png', 
        '6spades.png', 
        '7spades.png', 
        '8spades.png', 
        '9spades.png', 
        '10spades.png', 
        'aspades.png',
        'jackspades.png', 
        'kingspades.png', 
        'queenspades.png',
        'joker.png'],

      tips = ['push up 2 reps',
        'push up 3 reps',
        'push up 4 reps',
        'push up 5 reps',
        'push up 6 reps',
        'push up 7 reps',
        'push up 8 reps',
        'push up 9 reps',
        'push up 10 reps',
        'push up 20 reps',
        'push up 11 reps',
        'push up 13 reps',
        'push up 12 reps',
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


      $('.image-upperbody-cards').append("<img src='"+path+images[i]+"'>").hide().fadeIn(2000);
      $('.tip-upperbody-cards').append("Tip: "+tips[i]);
      $('.score-upperbody-cards').append("Score: "+score[i]);

      
      //time and time break
      const upperbodyTimerGame = new Timer();

      $('#upperbodyPlayTime').click(function (){
        upperbodyTimerGame.start();
      });

      upperbodyTimerGame.addEventListener('secondsUpdated', function (e) {
        $('#upperbodyTimeGame').html('Time: ' + upperbodyTimerGame.getTimeValues().toString());
      });

      upperbodyTimerGame.addEventListener('started', function (e) {
        $('#upperbodyTimeGame').html('Time: '+ upperbodyTimerGame.getTimeValues().toString());
    });

      const upperbodyTimerBreak = new Timer();

      $('#upperbodyPlayBreak').click(function () {
        upperbodyTimerGame.pause();
        upperbodyTimerBreak.start();

        var resultupperbodyTimerGame = upperbodyTimerGame.getTimeValues().toString();
        console.log(resultupperbodyTimerGame);
      });


      $('#upperbodyPauseBreak').click(function () {
        upperbodyTimerBreak.pause();
        upperbodyTimerGame.start();

        var resultupperbodyTimerBreak = upperbodyTimerBreak.getTimeValues().toString();
        console.log(resultupperbodyTimerBreak);
      });

      upperbodyTimerBreak.addEventListener('secondsUpdated', function (e) {
        $('#upperbodyTimeBreak').html(upperbodyTimerBreak.getTimeValues().toString());
      });
  
      upperbodyTimerBreak.addEventListener('started', function (e) {
        $('#upperbodyTimeBreak').html(upperbodyTimerBreak.getTimeValues().toString());
      });
      //end time and time break


      //when click nextCard button 
      $("#nextCard").click(function (){

        var str_n = localStorage.getItem('counterNextCard');
        var upperbodyScore = localStorage.getItem('upperbodyScore');
        
        
        if (str_n == null || str_n == "null") {

          str_n = "0";
          n = 0;
          upperbodyScore = "0";
          

          //tenho de colocar 13 uns
        /* } else if (str_n == "0111"){

          var n = parseInt(str_n);

          //tenho de colocar a ir para pagina de estatistica
          window.location.href = "homepage/statistics";

        */}  else {

          var n = parseInt(str_n);
          n++;
          str_n = str_n + 1;

          upperbodyScore = ""+score[i];
        }


        console.log("valor de n: "+n);
        localStorage.setItem("counterNextCard", str_n);
        console.log("Score: "+upperbodyScore);

        //reset localStorage
        //localStorage.clear();


        $('#divScore').load(location.href + "#divScore");
        $('.upperbodyScoreCardsTest').append(""+upperbodyScore);
      });
  });
  }
}
