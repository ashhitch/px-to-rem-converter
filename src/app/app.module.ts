import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterialModule, MdSnackBar } from '@angular/material';
import { PxRemComponent } from './px-rem/px-rem.component';


@NgModule({
  declarations: [
    AppComponent,
    PxRemComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [MdSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }