import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BnNgTreeModule } from 'projects/bn-ng-tree/src/public_api';

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
