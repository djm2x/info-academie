import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dynamic-chart',
  templateUrl: './dynamic-chart.component.html',
  styleUrls: ['./dynamic-chart.component.scss']
})
export class DynamicChartComponent implements OnInit {
  title = '';
  X = '';
  Y = '';
  public barChartOptions: ChartOptions = {
    responsive: true,
    title: {
      text: '',
      display: true,
    },
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [{}], yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
  };
  public barChartLabels: Label[] = [/*'2006', '2007', '2008', '2009', '2010', '2011', '2012'*/];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [/*65, 59, 80, 81, 56, 55, 40*/], label: '' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  public barChartColors: Color[] = [];

  @Input() dataSubject = new Subject();

  constructor() { }

  ngOnInit() {
    this.dataSubject.subscribe((r: { barChartLabels: Label[], barChartData: ChartDataSets[], title: string, X: string, Y: string }) => {
      this.title = r.title;
      this.barChartLabels = r.barChartLabels;
      this.barChartData = r.barChartData;
      this.X = r.X;
      this.Y = r.Y;

      console.log(this.getColors(this.barChartData.length), this.barChartLabels.length, this.barChartData.length)

      // this.barChartColors[0].backgroundColor = this.getColors(this.barChartData.length);
      this.barChartColors = [];

      // if (this.barChartData.length === 1) {
      //   // this.barChartColors[0].backgroundColor = this.getColors(this.barChartLabels.length);
      //   this.barChartColors.push({ backgroundColor: this.getColors(this.barChartLabels.length) });
      // } else {

        const colors = this.getColors(this.barChartData.length);

        this.barChartData.forEach((_, i) => this.barChartColors.push({ backgroundColor: colors[i] }));
     // }

      console.log(this.barChartColors)
      // console.log(this.barChartLabels)
      // console.log(this.barChartData)
    });
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    // console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    // console.log(event, active);
  }

  public randomize(): void {
    this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  }

  getColors(length) {
    // tslint:disable-next-line:max-line-length
    const pallet = [
      '#2a6ebbbd',
      '#358802a6',
      '#f48536b8',
      '#ba6446b8',
      '#7dc460bd',
      '#fdb93ac4',
      '#5c5c5fbf',
      '#ef4f42cc',
      '#a5a6aac9',
      '#36bfa6',

      // '#85144b', a31414
      // '#F012BE',
      // '#3D9970',
      // '#111111',
      // '#AAAAAA',
    ];
    // const pallet = ['#d17c36', '#496488', '#84bc5b'];
    const colors = [];

    for (let i = 0; i < length; i++) {
      colors.push(pallet[i % pallet.length]);
    }

    return colors;
  }
}
