# PeriodicTable

UI is from [https://github.com/FlorianFe/Elements](https://github.com/FlorianFe/Elements)

Dev environment is from [ng-zorro-antd](https://github.com/NG-ZORRO/ng-zorro-antd)

<img src="https://github.com/matai-tech/periodic-table/blob/master/components/assets/view.gif" alt="view">

## Quick start

```shell
$ npm install mta-periodic-table -S
```

```ts
// app.module.ts
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
```

```html
<mta-periodic-table></mta-periodic-table>
```
See [details](https://github.com/matai-tech/periodic-table/blob/master/integration/angular-cli/src/app/app.component.ts)

## Development
```shell
# demo
$ npm run start

# build
$ npm run integration-cli
```

