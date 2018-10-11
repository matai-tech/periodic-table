import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mta-chemical-element',
  templateUrl: './mta-chemical-element.component.html',
  styles: []
})
export class MtaChemicalElementComponent implements OnInit {
  @Input() symbol: string;
  @Input() group: string;

  constructor() { }

  ngOnInit() {
  }

}
