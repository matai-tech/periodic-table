import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { elements } from './assets/chemical-elements';

@Component({
  selector: 'mta-periodic-table',
  templateUrl: './mta-periodic-table.component.html',
  styles: []
})
export class MtaPeriodicTableComponent implements OnInit {
  e = elements;

  constructor(
  ) { }

  ngOnInit() {
  }

}
