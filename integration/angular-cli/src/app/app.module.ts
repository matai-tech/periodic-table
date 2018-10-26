import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MtaPeriodicTableModule } from 'mta-periodic-table';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MtaPeriodicTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
