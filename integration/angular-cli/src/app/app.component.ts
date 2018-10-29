import { Component } from '@angular/core';
import { MtaPeriodicTableService } from 'mta-periodic-table';

@Component({
  selector: 'app-root',
  template: `
    <mta-periodic-table></mta-periodic-table>
    <p>
      <button (click)="reset()">reset</button>
    </p>
    <p>
      selectElements: {{service.selectedElements | json}}
    </p>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';

  constructor(public service: MtaPeriodicTableService) {
  }

  reset() {
    this.service.reset();
  }
}
