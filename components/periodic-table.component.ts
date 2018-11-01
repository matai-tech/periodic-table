import { Component, OnInit, HostListener, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { elements } from './assets/chemical-elements';
import { MtaPeriodicTableService } from './periodic-table.service';
import { Subscription } from 'rxjs';
import { ChemicalElement } from './interface';

@Component({
  selector: 'mta-periodic-table',
  templateUrl: './periodic-table.component.html',
  styles: [`
  .container {
    display: flex;
  }
  .item {
    flex: 1;
    margin: 2px;
  }
  .align-right {
    text-align: right;
  }
  .left-box {
    flex: 3;
  }
  .middle-box {
    flex: 8;
  }
  .right-box {
    flex: 7;
  }
  .index {
    font-family: 'Times New Roman', Times, serif;
    font-size: 1vw;
    text-align: center;
    padding-top: calc(100% - 1.2em);
    color: #cfd8dc;
    border-bottom: 1px ridge #cfd8dc;
  }
  `]
})
export class MtaPeriodicTableComponent implements OnInit, OnDestroy {
  @Input() isShowElDetail: boolean = true;
  @Input() maxSelect: number;

  e = elements;
  change$: Subscription;

  constructor(
    public service: MtaPeriodicTableService
  ) { }

  @Output() elementChange: EventEmitter<object> = new EventEmitter();

  ngOnInit(): void {
    this.service.maxElLength = this.maxSelect;
    this.change$ = this.service.elementChange$.subscribe((e: ChemicalElement) => {
      this.elementChange.emit(e);
    });
  }

  ngOnDestroy(): void {
    this.change$.unsubscribe();
  }

}
