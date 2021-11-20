import { Component, OnInit } from '@angular/core';
import Timer from 'easytimer.js';


@Component({
  selector: 'app-cardio-training',
  templateUrl: './cardio-training.component.html',
  styleUrls: ['./cardio-training.component.css']
})
export class CardioTrainingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(window).ready(() =>{

      var path = '../assets/cards/',

        images = ['2diamond.png', 
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

      tips = ['jumping jacks 2 reps',
        'jumping jacks 3 reps',
        'jumping jacks 4 reps',
        'jumping jacks 5 reps',
        'jumping jacks 6 reps',
        'jumping jacks 7 reps',
        'jumping jacks 8 reps',
        'jumping jacks 9 reps',
        'jumping jacks 10 reps',
        'jumping jacks 20 reps',
        'jumping jacks 11 reps',
        'jumping jacks 13 reps',
        'jumping jacks 12 reps',
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


      $('.image-cardio-cards').append("<img src='"+path+images[i]+"'>").hide().fadeIn(2000);
      $('.tip-cardio-cards').append("Tip: "+tips[i]);
      $('.score-cardio-cards').append("Score: "+score[i]);

      
      //time and time break
      const cardioTimerGame = new Timer();

      $('#cardioPlayTime').click(function (){
        cardioTimerGame.start();
      });

      cardioTimerGame.addEventListener('secondsUpdated', function (e) {
        $('#cardioTimeGame').html('Time: ' + cardioTimerGame.getTimeValues().toString());
      });

      cardioTimerGame.addEventListener('started', function (e) {
        $('#cardioTimeGame').html('Time: '+ cardioTimerGame.getTimeValues().toString());
    });

      const cardioTimerBreak = new Timer();

      $('#cardioPlayBreak').click(function () {
        cardioTimerGame.pause();
        cardioTimerBreak.start();

        var resultcardioTimerGame = cardioTimerGame.getTimeValues().toString();
        console.log(resultcardioTimerGame);
      });


      $('#cardioPauseBreak').click(function () {
        cardioTimerBreak.pause();
        cardioTimerGame.start();

        var resultcardioTimerBreak = cardioTimerBreak.getTimeValues().toString();
        console.log(resultcardioTimerBreak);
      });

      cardioTimerBreak.addEventListener('secondsUpdated', function (e) {
        $('#cardioTimeBreak').html(cardioTimerBreak.getTimeValues().toString());
      });
  
      cardioTimerBreak.addEventListener('started', function (e) {
        $('#cardioTimeBreak').html(cardioTimerBreak.getTimeValues().toString());
      });
      //end time and time break


      //when click nextCard button 
      $("#nextCard").click(function (){

        var str_n = localStorage.getItem('counterNextCard');
        var cardioScore = localStorage.getItem('cardioScore');
        
        
        if (str_n == null || str_n == "null") {

          str_n = "0";
          n = 0;
          cardioScore = "0";
          

          //tenho de colocar 52 uns
        /* } else if (str_n == "0111"){

          var n = parseInt(str_n);

          //tenho de colocar a ir para pagina de estatistica
          window.location.href = "homepage/singleplayer/statistics";

        */}  else {

          var n = parseInt(str_n);
          n++;
          str_n = str_n + 1;

          cardioScore = ""+score[i];
        }


        console.log("valor de n: "+n);
        localStorage.setItem("counterNextCard", str_n);
        console.log("Score: "+cardioScore);

        //reset localStorage
        //localStorage.clear();


        $('#divScore').load(location.href + "#divScore");
        $('.cardioScoreCardsTest').append(""+cardioScore);
      });
  });
  }
}
