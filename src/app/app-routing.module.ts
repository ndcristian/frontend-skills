
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgDirectivesTestComponent } from './modules/angular/directives/ng-directives-test/ng-directives-test.component';
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
import { ObservableComponent } from './modules/rxjs/observable/observable.component';
import { SpecificTypesComponent } from './modules/typescript/specific-types/specific-types.component';
import { WsComponent } from './modules/websocket/ws/ws.component';


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
    path:'ng/content',
    component:NgContentComponent
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
    path:'ts/types',
    component:SpecificTypesComponent
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


]
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
