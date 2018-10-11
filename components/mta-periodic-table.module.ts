import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtaPeriodicTableComponent } from './mta-periodic-table.component';
import { MtaChemicalElementComponent } from './mta-chemical-element.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ MtaPeriodicTableComponent, MtaChemicalElementComponent ],
  exports: [ MtaPeriodicTableComponent ]
})
export class MtaPeriodicTableModule { }
