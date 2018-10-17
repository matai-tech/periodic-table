import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MtaChemicalElementDetailComponent } from './mta-chemical-element-detail/mta-chemical-element-detail.component';
import { MtaChemicalElementComponent } from './mta-chemical-element.component';
import { MtaPeriodicTableComponent } from './mta-periodic-table.component';
import { MtaPeriodicTableService } from './mta-periodic-table.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [ MtaPeriodicTableComponent, MtaChemicalElementComponent, MtaChemicalElementDetailComponent ],
  exports: [ MtaPeriodicTableComponent ],
  providers: [ MtaPeriodicTableService ]
})
export class MtaPeriodicTableModule { }
