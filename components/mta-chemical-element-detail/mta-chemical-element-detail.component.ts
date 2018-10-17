import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mta-chemical-element-detail',
  templateUrl: './mta-chemical-element-detail.component.html',
  styleUrls: ['./mta-chemical-element-detail.less']
})
export class MtaChemicalElementDetailComponent {
  @Input() element;

  constructor() { }

}
