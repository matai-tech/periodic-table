# PeriodicTable

UI is from [https://github.com/FlorianFe/Elements](https://github.com/FlorianFe/Elements)

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
