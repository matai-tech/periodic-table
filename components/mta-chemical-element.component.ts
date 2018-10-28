import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ChemicalElement } from './interface';
import { MtaPeriodicTableService } from './mta-periodic-table.service';

@Component({
  selector: 'mta-chemical-element',
  templateUrl: './mta-chemical-element.component.html',
  styles: [`
  :host {
    --alkali-metal-primary-color: #ff8a65;
    --alkaline-earth-metal-primary-color: #ffb74d;
    --transition-metal-primary-color: #ffd54f;
    --post-transition-metal-primary-color: #dce775;
    --metalloid-primary-color: #aed581;
    --other-nonmetal-primary-color: #4db6ac;
    --halogen-primary-color: #4dd0e1;
    --noble-gas-primary-color: #4fc3f7;
    --lanthanide-primary-color: #9575cd;
    --actinide-primary-color: #f06292;
    --alkali-metal-background-color: #ffab91;
    --alkaline-earth-metal-background-color: #ffcc80;
    --transition-metal-background-color: #ffe082;
    --post-transition-metal-background-color: #c5e1a5;
    --metalloid-background-color: #a5d6a7;
    --other-nonmetal-background-color: #80cbc4;
    --halogen-background-color: #80deea;
    --noble-gas-background-color: #81d4fa;
    --lanthanide-background-color: #ce93d8;
    --actinide-background-color: #f48fb1;
  }
  .element-card {
    width: 100%;
    padding: calc(50% - 1em);
    padding-top: calc(50% - 0.7em);
    padding-bottom: calc(50% - 0.7em);
    font-size: 20px;
    font-family: sans-serif;
    color: white;
    text-align: center;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 2px;
    transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  }
  .element-card.active,
  .element-card:hover {
    border-color: #999;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
      0 1px 10px 0 rgba(0, 0, 0, 0.12),
      0 2px 4px -1px rgba(0, 0, 0, 0.4);
  }
  .alkali-metal {
    background-color: var(--alkali-metal-background-color);
  }
  .alkaline-earth-metal {
    background-color: var(--alkaline-earth-metal-background-color);
  }
  .transition-metal {
    background-color: var(--transition-metal-background-color);
  }
  .metalloid {
    background-color: var(--metalloid-background-color);
  }
  .post-transition-metal {
    background-color: var(--post-transition-metal-background-color);
  }
  .other-nonmetal {
    background-color: var(--other-nonmetal-background-color);
  }
  .lanthanide {
    background-color: var(--lanthanide-background-color);
  }
  .actinide {
    background-color: var(--actinide-background-color);
  }
  .halogen {
    background-color: var(--halogen-background-color);
  }
  .noble-gas {
    background-color: var(--noble-gas-background-color);
  }
  .selected {
    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12),
      0 5px 5px -3px rgba(0, 0, 0, 0.4);
  }
  .selected:hover {
    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12),
      0 5px 5px -3px rgba(0, 0, 0, 0.4);
  }
  `]
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
