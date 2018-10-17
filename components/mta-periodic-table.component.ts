import { Component, OnInit, HostListener, Output, EventEmitter, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { elements } from './assets/chemical-elements';
import { MtaPeriodicTableService } from './mta-periodic-table.service';
import { Subscription } from 'rxjs';
import { ChemicalElement } from './interface';

@Component({
  selector: 'mta-periodic-table',
  templateUrl: './mta-periodic-table.component.html',
  styles: []
})
export class MtaPeriodicTableComponent implements OnInit, OnDestroy {
  e = elements;
  change$: Subscription;

  constructor(
    public service: MtaPeriodicTableService
  ) { }

  @Output() elementChange: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.change$ = this.service.elementChange$.subscribe((e: ChemicalElement) => {
      this.elementChange.emit(e.symbol);
    });
  }

  ngOnDestroy(): void {
    this.change$.unsubscribe();
  }

}
