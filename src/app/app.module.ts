import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
import { SpecificTypesComponent } from './modules/typescript/specific-types/specific-types.component';
import { WsComponent } from './modules/websocket/ws/ws.component';
import { WsService } from './modules/websocket/ws.service';
import { NgTemplateComponent } from './modules/angular/ng-template/ng-template.component';
import { SidebarComponent } from './libs/sidebar/sidebar.component';
import { NgDirectivesDirective } from './modules/angular/directives/ng-directives.directive';
import { NgDirectivesTestComponent } from './modules/angular/directives/ng-directives-test/ng-directives-test.component';
import { TwoWayBindingComponent } from './modules/angular/two-way-binding/two-way-binding.component';
import { GenericInputComponent } from './modules/html/generic-input/generic-input.component';
import { GenericFormComponent } from './modules/html/generic-form/generic-form.component';
import { MainLayoutComponent } from './modules/html/main-layout/main-layout.component';
import { HeaderBarComponent } from './modules/html/header-bar/header-bar.component';
import { GenericButtonComponent } from './modules/html/generic-button/generic-button.component';
import { NgTemplateFormComponent } from './modules/html/ng-template-form/ng-template-form.component';
import { GenericTypeComponent } from './modules/ts/generic-type/generic-type.component';
import { AgularTypesComponent } from './modules/ts/agular-types/agular-types.component';
import { EtxCalendarComponent } from './libs/etx-calendar/etx-calendar.component';

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
    ViewContentComponent,
    SpecificTypesComponent,
    WsComponent,
    NgTemplateComponent,
    SidebarComponent,
    NgDirectivesDirective,
    NgDirectivesTestComponent,
    TwoWayBindingComponent,
    GenericInputComponent,
    GenericFormComponent,
    MainLayoutComponent,
    HeaderBarComponent,
    GenericButtonComponent,
    NgTemplateFormComponent,
    GenericTypeComponent,
    AgularTypesComponent,
    EtxCalendarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [WsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
