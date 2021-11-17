import { createDirectiveTypeParams } from '@angular/compiler/src/render3/view/compiler';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Timer, Time, TimerOptions } from 'timer-node';
import { CardTip } from './cards'
import { CARDGLOBAL } from './mocks';


@Component({
  selector: 'app-global-training',
  templateUrl: './global-training.component.html',
  styleUrls: ['./global-training.component.css']
})
export class GlobalTrainingComponent implements OnInit {

  cardTips: CardTip[] = [];


  ngOnInit(): void {

    $(document).ready(function(){

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
        'jackclub.png', 'jackdiamond.png', 'jackheart.png', 'jackspades.png', 
        'kingclub.png', 'kingdiamond.png', 'kingheart.png', 'kingspades.png', 
        'queenclubs.png', 'queendiamond.png', 'queenheart.png', 'queenspades.png',
      ],
        i = Math.floor(Math.random()*images.length);

      $('.global-cards').append("<img src='"+path+images[i]+"'>").hide().fadeIn(2000);
    });
  }
}