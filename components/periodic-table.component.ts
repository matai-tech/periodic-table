import { Component, OnInit, OnChanges, HostListener, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
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
export class MtaPeriodicTableComponent implements OnInit, OnChanges,  OnDestroy {
  @Input() isShowElDetail = true; // 是否展示元素详情
  @Input() maxSelect: number; // 最大可以选择元素的个数
  @Input() canSelectElements; // 关联可以选择的元素string[],例['h', 'li', 'be']

  e = elements;
  change$: Subscription;

  constructor(
    public service: MtaPeriodicTableService
  ) { }

  @Output() elementChange: EventEmitter<object> = new EventEmitter();

  ngOnInit(): void {
    this.service.setMaxLength(this.maxSelect);
    this.change$ = this.service.elementChange$.subscribe((e: ChemicalElement) => {
      this.elementChange.emit(e);
    });
  }

  ngOnChanges(): void {
    this.initCanSelect();
    this.canSelectElements = this.canSelectElements.concat(this.service.selectedElements);
    this.service.setCanSelectElements(this.canSelectElements);
  }

  ngOnDestroy(): void {
    this.change$.unsubscribe();
  }

  /**
   * 如果不传入或为不为数组，初始化canSelectElements
   */
  initCanSelect () {
    if (this.canSelectElements === undefined || !(this.canSelectElements instanceof Array)) {
      this.canSelectElements = [];
      for (const key in this.e) {
        if (key) {
          this.canSelectElements.push(key);
        }
      }
    }
  }
}
