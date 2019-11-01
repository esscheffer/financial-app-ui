import {Component, OnInit} from '@angular/core';
import {DashboardService} from "../dashboard.service";
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pieChartData: any;
  lineChartData: any;

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.configurePieChart();
    this.configureLineChart();
  }

  configurePieChart() {
    this.dashboardService.financialEntriesByCategory()
      .then(data => {
        this.pieChartData = {
          labels: data.map(singleData => singleData.category.name),
          datasets: [
            {
              data: data.map(singleData => singleData.total),
              backgroundColor: ['#FF9900', '#109618', '#990099', '#3B3EAC', '#0099C6', '#DD4477', '#3366CC', '#DC3912']
            }
          ]
        };
      })
  }

  configureLineChart() {
    this.dashboardService.financialEntriesByDay()
      .then(data => {
        const monthDays = DashboardComponent.configureMonthDays();
        this.lineChartData = {
          labels: monthDays,
          datasets: [
            {
              label: 'Incomes',
              data: this.totalsPerDay(data.filter(singleData => singleData.financialEntryType === 'INCOME'), monthDays),
              borderColor: '#3366CC'
            }, {
              label: 'Expenses',
              data: this.totalsPerDay(data.filter(singleData => singleData.financialEntryType === 'EXPENSE'), monthDays),
              borderColor: '#D62B00'
            }
          ]
        };
      })
  }

  private static configureMonthDays() {
    const numberOfDays = moment().daysInMonth();
    const days: number[] = [];

    for (let i = 1; i <= numberOfDays; i++) {
      days.push(i);
    }

    return days;
  }

  private totalsPerDay(data, monthDays) {
    const totals: number[] = [];
    monthDays.forEach(day => {
      const dayData = data.find(singleData => singleData.date.getDate() === day);
      if (dayData) {
        totals.push(dayData.total)
      } else {
        totals.push(0)
      }
    });

    return totals;
  }
}
