import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const trainingLineChart = new Chart("trainingLineChart", {
      type: 'line',

      options: {
        responsive: true,

        title: {
          display: true,
          text: 'Training Time (Minutes)'
        }
      },

      data: {
        labels: ['Global', 'Leg', 'Upper Body', 'Core', 'Cardio'],
        datasets: [{
          label: 'Training',
          data: [7.48, 2.54, 3.48, 4.26, 6.12],
          fill: false,
          borderColor: '#dc3545'
        },
        {
          label: 'Break',
          data: [1.30, 1.10, 2.02, 3.25, 5.34],
          fill: false,
          borderColor: '#adb5bd'
        }],
      }
    });


    const exerciseLineChart = new Chart("exerciseLineChart", {
      type: 'line',

      options: {
        responsive: true,

        title: {
          display: true,
          text: 'Exercise Time (Minutes)'
        }
      },

      data: {
        labels: ['Squats 2 reps', 'Squats 3 reps', 'Squats 4 reps', 'Squats 5 reps', 'Squats 6 reps', 'Squats 7 reps', 'squats 8 reps', 'squats 9 reps', 'squats 10 reps',
          'squats 11 reps', 'squats 12 reps', 'squats 13 reps', 'squats 20 reps', 'last exercise 30 reps'],
        datasets: [{
          label: 'Training',
          data: [0.4, 0.6, 0.08, 0.10, 0.12, 0.14, 0.16, 0.27, 0.20, 0.22, 0, 0, 0, 0.35],
          fill: false,
          borderColor: '#dc3545'
        },
        {
          label: 'Break',
          data: [0, 0, 0, 0, 0, 0.10, 0.15, 0.12, 0, 0, 0, 0.08, 0, 0.25],
          fill: false,
          borderColor: '#adb5bd'
        }],
      }
    });
  }
}


