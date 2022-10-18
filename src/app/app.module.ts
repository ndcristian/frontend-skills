import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PositionComponent } from './modules/css/position/position.component';
import { DisplayComponent } from './modules/css/display/display.component';
import { BeforeAfterComponent } from './modules/html/before-after/before-after.component';

@NgModule({
  declarations: [
    AppComponent,
    PositionComponent,
    DisplayComponent,
    BeforeAfterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
