import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ChemicalElement } from './interface';

@Injectable({
  providedIn: 'root'
})
export class MtaPeriodicTableService {
  // tslint:disable-next-line:no-any
  selectedElements: any[] = []; // 选择的元素池
  currentElement; // 当前选中的元素
  elementChange$ = new Subject();
  maxElLength: number; // 最大可以选择元素的个数
  canSelectElements: string[]; // 关联可以选择的元素string[],例['h', 'li', 'be']

  constructor() {
  }

  change(e: ChemicalElement): void {
    if (this.maxElLength !== undefined && this.maxElLength < 0) {
      alert(`maxElLength请设置大于或等于0`);
      return;
    }
    const symbol = e.symbol;
    const index = this.selectedElements.indexOf(e.symbol);
    let messageErr = false;
    if (this.isSelected(e)) {
      this.selectedElements.splice(index, 1);
    } else {
      if (this.canSelectElements.indexOf(e.symbol.toLocaleLowerCase()) > -1) {
        if (this.maxElLength !== undefined && this.selectedElements.length === this.maxElLength) {
          messageErr = true;
        } else {
          this.selectedElements.push(symbol);
          this.currentElement = e;
        }
      }
    }
    this.elementChange$.next(Object.assign({}, e, {messageErr}));
  }

  isSelected(e: ChemicalElement): boolean {
    return this.selectedElements.indexOf(e.symbol) > -1;
  }

  reset(): void {
    this.selectedElements = [];
  }

  setMaxLength(maxSelect: number) {
    this.maxElLength = maxSelect;
  }

  setCanSelectElements(elements: string[]) {
    this.canSelectElements = elements;
  }
}
