import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Custom imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// This module contains all the other material imports wrapped in it!
import {MaterialModule} from './material/material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
// import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    /*FlexLayoutModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
