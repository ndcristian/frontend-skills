import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PositionComponent } from './modules/css/position/position.component';
import { DisplayComponent } from './modules/css/display/display.component';
import { BeforeAfterComponent } from './modules/html/before-after/before-after.component';
import { ObservableComponent } from './modules/rxjs/observable/observable.component';
import { NgClassComponent } from './modules/angular/ng-class/ng-class.component';
import { NgStyleComponent } from './modules/angular/ng-style/ng-style.component';
import { NgIfComponent } from './modules/angular/ng-if/ng-if.component';
import { NgContainerComponent } from './modules/angular/ng-container/ng-container.component';
import { PipeDefaultComponent } from './modules/angular/pipe-default/pipe-default.component';
import { ViewChildComponent } from './modules/angular/view-child/view-child.component';
import { ContentCardComponent } from './libs/content-card/content-card.component';
import { DefaultButtonComponent } from './libs/default-button/default-button.component';
import { NgContentComponent } from './modules/angular/ng-content/ng-content.component';
import { ViewContentComponent } from './modules/angular/view-content/view-content.component';

@NgModule({
  declarations: [
    AppComponent,
    PositionComponent,
    DisplayComponent,
    BeforeAfterComponent,
    ObservableComponent,
    NgClassComponent,
    NgStyleComponent,
    NgIfComponent,
    NgContainerComponent,
    PipeDefaultComponent,
    ViewChildComponent,
    ContentCardComponent,
    DefaultButtonComponent,
    NgContentComponent,
    ViewContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
