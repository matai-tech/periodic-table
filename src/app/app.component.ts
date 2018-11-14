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
      this.canSelectElements = ['am'];
    }, 1000);
    setTimeout( () => {
      this.canSelectElements = ['si'];
    }, 2000);
    setTimeout( () => {
      this.canSelectElements = ['be'];
    }, 3000);
    setTimeout( () => {
      this.canSelectElements = ['he'];
    }, 4000);
  }

  aaa(e) {
    console.log(e);
  }
}
