import { Component, OnInit } from '@angular/core';
import { MtaPeriodicTableService } from 'components/periodic-table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'periodic-table';
  isShowElDetail = false;
  maxSelect = 3;
  canSelectElements: string[];

  constructor(public service: MtaPeriodicTableService) {
  }

  ngOnInit(): void {
    this.canSelectElements = undefined;
    setTimeout( () => {
      this.canSelectElements = ['AM'];
    }, 5000);
    setTimeout( () => {
      this.canSelectElements = ['SI'];
    }, 10000);
  }

  aaa(e) {
    console.log(e);
  }
}
