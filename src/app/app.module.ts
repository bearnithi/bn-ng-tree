import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/** DEV */
// import { BnNgTreeModule } from 'projects/bn-ng-tree/src/public_api';

 import { BnNgTreeModule} from 'bn-ng-tree-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BnNgTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
