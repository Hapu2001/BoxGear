import { Component, OnInit } from '@angular/core';

declare var google: any;
@Component({
  selector: 'app-doashboard',
  templateUrl: './doashboard.component.html',
  styleUrls: ['./doashboard.component.css']
})
export class DoashboardComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
     google.charts.load('current',{packages:['corechart']});

  google.charts.setOnLoadCallback(this.drawChart);
  }
  
  drawChart() {

    var data = google.visualization.arrayToDataTable([
      ['Element', 'Density', { role: 'style' }],
      ['Copper', 8.94, '#b87333'],            // RGB value
      ['Silver', 10.49, 'silver'],            // English color name
      ['Gold', 19.30, 'gold'],

    ['Platinum', 21.45, 'color: #e5e4e2' ], // CSS-style declaration
   ]);
    
    var options = {
      title: 'World Wide Wine Production'
    };
    
    var chart = new google.visualization.BarChart(document.getElementById('myChart'));
    chart.draw(data, null);
    
    }
  

}
