import { Component } from '@angular/core';
import { MtaPeriodicTableService } from 'components/mta-periodic-table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'periodic-table';

  constructor(public service: MtaPeriodicTableService) {
  }
}
