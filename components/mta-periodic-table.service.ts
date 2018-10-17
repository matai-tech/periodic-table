import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ChemicalElement } from './interface';

@Injectable({
  providedIn: 'root'
})
export class MtaPeriodicTableService {
  // tslint:disable-next-line:no-any
  selectedElements: any[] = [];
  currentElement;
  elementChange$ = new Subject();

  constructor() {
  }

  change(e: ChemicalElement): void {
    const symbol = e.symbol;
    const index = this.selectedElements.indexOf(e.symbol);
    if (this.isSelected(e)) {
      this.selectedElements.splice(index, 1);
    } else {
      this.selectedElements.push(symbol);
      this.currentElement = e;
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
