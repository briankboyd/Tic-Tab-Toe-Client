import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TictabtoeComponent } from './tictabtoe/tictabtoe.component';

@NgModule({
  declarations: [
    AppComponent,
    TictabtoeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent, TictabtoeComponent]
})
export class AppModule { }
