import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Custom imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavComponent } from './top-nav/top-nav.component';
import { CardContextMenuComponent } from './card-context-menu/card-context-menu.component';


// This module contains all the other material imports wrapped in it!
import { MaterialModule } from './material/material.module';
import { MatMenuModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    CardContextMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatMenuModule,
    MatButtonModule
    
  ],
  exports: [
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
