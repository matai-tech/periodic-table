import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtaPeriodicTableComponent } from './mta-periodic-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ MtaPeriodicTableComponent ],
  exports: [ MtaPeriodicTableComponent ]
})
export class MtaPeriodicTableModule { }
