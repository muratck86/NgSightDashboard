import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  monthlyRentData: any[] = []
  chartLabels: any[] = []
  chartOptions: any = {}
  chartLegend = true
  chartType = "line"
  chartColors: any[]

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getMonthlyRents().subscribe(d => {
      this.monthlyRentData = d.dataset
      this.chartLabels = d.labels
      this.chartColors = d.colors
    })
    this.chartOptions = {
      responsive: true
    }

  }

}
