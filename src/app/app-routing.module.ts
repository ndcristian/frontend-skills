
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomInputComponent } from './libs/custom-input/custom-input.component';
import { DragDropFileUploaderComponent } from './libs/drag-drop-file-uploader/drag-drop-file-uploader.component';
import { EtxCalendarComponent } from './libs/etx-calendar/etx-calendar.component';
import { IconComponent } from './libs/icon/icon.component';
import { ProgressBarComponent } from './libs/progress-bar/progress-bar.component';
import { ThreeDotsMenuComponent } from './libs/three-dots-menu/three-dots-menu.component';
import { ViewLayoutComponent } from './libs/view-layout/view-layout.component';
import { NgDirectivesTestComponent } from './modules/angular/directives/ng-directives-test/ng-directives-test.component';
import { HostPseudoClassComponent } from './modules/angular/host-pseudo-class/host-pseudo-class.component';
import { NgClassComponent } from './modules/angular/ng-class/ng-class.component';
import { NgContainerComponent } from './modules/angular/ng-container/ng-container.component';
import { NgContentComponent } from './modules/angular/ng-content/ng-content.component';
import { NgIfComponent } from './modules/angular/ng-if/ng-if.component';
import { NgStyleComponent } from './modules/angular/ng-style/ng-style.component';
import { NgTemplateComponent } from './modules/angular/ng-template/ng-template.component';
import { PipeDefaultComponent } from './modules/angular/pipe-default/pipe-default.component';
import { TwoWayBindingComponent } from './modules/angular/two-way-binding/two-way-binding.component';
import { ViewChildComponent } from './modules/angular/view-child/view-child.component';
import { ViewContentComponent } from './modules/angular/view-content/view-content.component';
import { DisplayComponent } from './modules/css/display/display.component';
import { PositionComponent } from './modules/css/position/position.component';
import { BeforeAfterComponent } from './modules/html/before-after/before-after.component';
import { GenericFormComponent } from './modules/html/generic-form/generic-form.component';
import { GenericInputComponent } from './modules/html/generic-input/generic-input.component';
import { MainLayoutComponent } from './modules/html/main-layout/main-layout.component';
import { NgTemplateFormComponent } from './modules/html/ng-template-form/ng-template-form.component';
import { ArraysComponent } from './modules/java-script/arrays/arrays.component';
import { EventHendlerComponent } from './modules/java-script/event-hendler/event-hendler.component';
import { ObservableComponent } from './modules/rxjs/observable/observable.component';
import { GenericTypeComponent } from './modules/typescript/generic-type/generic-type.component';
import { SpecificTypesComponent } from './modules/typescript/specific-types/specific-types.component';
import { WsComponent } from './modules/websocket/ws/ws.component';
import { ShopViewComponent } from './modules/angular/directives/structural-directive/shop-view/shop-view.component';
import { InterfaceImplComponent } from './modules/typescript/interface-impl/interface-impl.component';
import { FormTemplateComponent } from './modules/angular/form-template/form-template.component';
import { StructuresOperatorsComponent } from './modules/java-script/structures-operators/structures-operators.component';
import { OtherCssPropsComponent } from './modules/css/other-css-props/other-css-props.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'css/position',
    component: PositionComponent,
  },
  {
    path: 'css/display',
    component: DisplayComponent,
  },
  {
    path: 'css/other-css',
    component: OtherCssPropsComponent,
  },
  {
    path:'html/before-after',
    component:BeforeAfterComponent
  },
  {
    path:'html/input',
    component:GenericInputComponent
  },
  {
    path:'html/form',
    component:GenericFormComponent
  },
  {
    path:'html/template-form',
    component:NgTemplateFormComponent
  },
  {
    path:'html/layout',
    component:MainLayoutComponent,
    children: [
      {
        path:'calendar',
        component:EtxCalendarComponent
      },
      {
        path:'input-geric',
        component:GenericInputComponent
      },
      {
        path:'host',
        component:HostPseudoClassComponent
      },
      {
        path:'input-custom',
        component:CustomInputComponent
      },
      {
        path:'ng-content',
        component:NgContentComponent
      },
      {
        path:'event-hendler',
        component:EventHendlerComponent
      },
      {
        path:'progress-bar',
        component:ProgressBarComponent
      },
      {
        path:'icon',
        component:IconComponent
      },
      {
        path:'file-uploader',
        component:DragDropFileUploaderComponent
      },
      {
        path:'observable',
        component:ObservableComponent
      },
      {
        path:'arays',
        component:ArraysComponent
      },
      {
        path:'view-child',
        component:ViewChildComponent
      },
    ]
  },
  {
    path:'sd',
    component:ShopViewComponent
  },
  {
    path:'interface',
    component:InterfaceImplComponent
  },
  {
    path:'rxjs/observable',
    component:ObservableComponent
  },
  {
    path:'ng/ngclass',
    component:NgClassComponent
  },
  {
    path:'ng/ngstyle',
    component:NgStyleComponent
  },
  {
    path:'ng/if',
    component:NgIfComponent
  },
  {
    path:'ng/container',
    component:NgContainerComponent
  },
  {
    path:'ng/pipe',
    component:PipeDefaultComponent
  },
  {
    path:'ng/view-child',
    component:ViewChildComponent
  },
  {
    path:'ng/view-content',
    component:ViewContentComponent
  },
  {
    path:'ng/template',
    component:NgTemplateComponent
  },
  {
    path:'ng/host',
    component:HostPseudoClassComponent
  },
  {
    path:'ts/types',
    component:SpecificTypesComponent
  },
  {
    path:'ts/generic',
    component:GenericTypeComponent
  },
  {
    path:'ws/check',
    component:WsComponent
  },
  {
    path:'ng/directives',
    component:NgDirectivesTestComponent
  },
  {
    path:'ng/2way',
    component:TwoWayBindingComponent
  },
  {
    path:'ng/form-template',
    component:FormTemplateComponent
  },
  {
    path:'v',
    component:ViewLayoutComponent
  },
  {
    path:'operator',
    component:StructuresOperatorsComponent
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
