import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ChemicalElement } from './interface';
import { NzMessageService } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class MtaPeriodicTableService {
  // tslint:disable-next-line:no-any
  selectedElements: any[] = [];
  currentElement;
  elementChange$ = new Subject();
  maxElLength: number;

  constructor(private message: NzMessageService) {
  }

  change(e: ChemicalElement): void {
    if (this.maxElLength < 0) {
      this.message.create('error', `maxElLength请设置大于或等于0`);
      return;
    }
    const symbol = e.symbol;
    const index = this.selectedElements.indexOf(e.symbol);
    if (this.isSelected(e)) {
      this.selectedElements.splice(index, 1);
    } else {
      if (this.maxElLength !== undefined && this.selectedElements.length === this.maxElLength) {
        this.message.create('error', `化学元素至多选择${this.maxElLength}个!`);
      } else {
        this.selectedElements.push(symbol);
        this.currentElement = e;
      }
    }
    this.elementChange$.next(e);
  }

  isSelected(e: ChemicalElement): boolean {
    return this.selectedElements.indexOf(e.symbol) > -1;
  }

  reset(): void {
    this.selectedElements = [];
  }
}
