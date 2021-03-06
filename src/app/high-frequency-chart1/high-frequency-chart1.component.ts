import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-high-frequency-chart1',
  templateUrl: './high-frequency-chart1.component.html',
  styleUrls: ['./high-frequency-chart1.component.css']
})
export class HighFrequencyChart1Component {
  public chartType: string = 'Auto';

  data = [
    { 'CountryName': 'China', 'Pop1995': 1216, 'Pop2005': 1297, },
    { 'CountryName': 'India', 'Pop1995': 920, 'Pop2005': 1090, },
    { 'CountryName': 'United States', 'Pop1995': 266, 'Pop2005': 295, },
    { 'CountryName': 'Indonesia', 'Pop1995': 197, 'Pop2005': 229, },
    { 'CountryName': 'Brazil', 'Pop1995': 161, 'Pop2005': 186, }
  ];

}
