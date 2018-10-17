import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ChemicalElement } from './interface';
import { MtaPeriodicTableService } from './mta-periodic-table.service';

@Component({
  selector: 'mta-chemical-element',
  templateUrl: './mta-chemical-element.component.html'
})
export class MtaChemicalElementComponent implements OnInit {
  @Input() element: ChemicalElement;
  @Input() group: string;

  @HostListener('click', [ '$event' ])
  onTriggerClick(event: MouseEvent): void {
    this._service.change(this.element);
    console.log(this._service.selectedElements);
    console.log(this._service.currentElement);
  }

  constructor(private _service: MtaPeriodicTableService) { }

  isSelected(): boolean {
    return this._service.isSelected(this.element);
  }

  ngOnInit() {
  }

}
