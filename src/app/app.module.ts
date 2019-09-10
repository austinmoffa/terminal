import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TerminalComponent } from './terminal/terminal.component';
import { TypewriterComponent } from './terminal/typewriter.component';

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    TypewriterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
