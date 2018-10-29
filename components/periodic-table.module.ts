import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MtaChemicalElementDetailComponent } from './chemical-element/chemical-element-detail.component';
import { MtaChemicalElementComponent } from './chemical-element/chemical-element.component';
import { MtaPeriodicTableComponent } from './periodic-table.component';
import { MtaPeriodicTableService } from './periodic-table.service';

export * from './periodic-table.component';
export * from './periodic-table.service';
export * from './chemical-element';

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
