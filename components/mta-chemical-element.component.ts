import { Component, OnInit, Input } from '@angular/core';
import { ElementConfig } from './interface';

@Component({
  selector: 'mta-chemical-element',
  templateUrl: './mta-chemical-element.component.html',
  styles: []
})
export class MtaChemicalElementComponent implements OnInit {
  @Input() element: ElementConfig;
  @Input() group: string;

  constructor() { }

  ngOnInit() {
  }

}
