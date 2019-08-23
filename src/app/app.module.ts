import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


/** DEV */
// import { BnNgTreeModule } from 'projects/bn-ng-tree/src/public_api';

 import { BnNgTreeModule} from 'bn-ng-tree-lib';

/** BUILD DIST */
// import { BnNgTreeModule } from 'dist/bn-ng-tree/';

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
