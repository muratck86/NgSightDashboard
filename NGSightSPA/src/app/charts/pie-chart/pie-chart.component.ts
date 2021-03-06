import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor(private dataService:DataService) { }

  pieChartData:number[]=[]
  colors= [{backgroundColor: ['#26547c', '#ff6b6b', '#ffd166']}]
  pieChartLabels:string[]
  pieChartType = "pie"

  ngOnInit(): void {
    this.dataService.getPieChartData().subscribe(d => {
      this.pieChartData = d.data
      this.pieChartLabels = d.labels
    })
  }

}
