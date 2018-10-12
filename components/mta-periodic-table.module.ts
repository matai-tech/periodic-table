import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtaPeriodicTableComponent } from './mta-periodic-table.component';
import { MtaChemicalElementComponent } from './mta-chemical-element.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [ MtaPeriodicTableComponent, MtaChemicalElementComponent ],
  exports: [ MtaPeriodicTableComponent ]
})
export class MtaPeriodicTableModule { }
