import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { GenericTypeComponent } from './modules/typescript/generic-type/generic-type.component';
import { EtxCalendarComponent } from './libs/etx-calendar/etx-calendar.component';
import { MenuCardComponent } from './modules/html/menu-card/menu-card.component';
import { HostPseudoClassComponent } from './modules/angular/host-pseudo-class/host-pseudo-class.component';
import { ChildComponentComponent } from './modules/angular/host-pseudo-class/child-component/child-component.component';
import { CustomInputComponent } from './libs/custom-input/custom-input.component';
import { EventHendlerComponent } from './modules/java-script/event-hendler/event-hendler.component';
import { DragDropFileUploaderComponent } from './libs/drag-drop-file-uploader/drag-drop-file-uploader.component';
import { FileDndDirective } from './libs/directives/file-dnd.directive';
import { IconComponent } from './libs/icon/icon.component';
import { ProgressBarComponent } from './libs/progress-bar/progress-bar.component';
import { ThreeDotsMenuComponent } from './libs/three-dots-menu/three-dots-menu.component';
import { LetVarComponent } from './modules/java-script/let-var/let-var.component';
import { StructuresOperatorsComponent } from './modules/java-script/structures-operators/structures-operators.component';
import { ViewLayoutComponent } from './libs/view-layout/view-layout.component';
import { CoursesComponent } from './modules/angular/directives/structural-directive/courses/courses.component';
import { CourseCardComponent } from './modules/angular/directives/structural-directive/course-card/course-card.component';
import { ShopViewComponent } from './modules/angular/directives/structural-directive/shop-view/shop-view.component';
import { RefactorCardDirective } from './modules/angular/directives/structural-directive/refactor-card.directive';
import { InterfaceImplComponent } from './modules/typescript/interface-impl/interface-impl.component';
import { FormTemplateComponent } from './modules/angular/form-template/form-template.component';
import { FormReactiveComponent } from './modules/angular/form-reactive/form-reactive.component';
import { PasswordStrengthDirective } from './modules/angular/directives/passord-strength.directive';
import { OtherCssPropsComponent } from './modules/css/other-css-props/other-css-props.component';

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
    EtxCalendarComponent,
    MenuCardComponent,
    HostPseudoClassComponent,
    ChildComponentComponent,
    CustomInputComponent,
    EventHendlerComponent,
    DragDropFileUploaderComponent,
    FileDndDirective,
    IconComponent,
    ProgressBarComponent,
    EventHendlerComponent,
    ThreeDotsMenuComponent,
    LetVarComponent,
    StructuresOperatorsComponent,
    ViewLayoutComponent,
    CoursesComponent,
    CourseCardComponent,
    ShopViewComponent,
    RefactorCardDirective,
    InterfaceImplComponent,
    FormTemplateComponent,
    FormReactiveComponent,
    PasswordStrengthDirective,
    OtherCssPropsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [WsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
