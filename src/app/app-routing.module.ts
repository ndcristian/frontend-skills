
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgClassComponent } from './modules/angular/ng-class/ng-class.component';
import { NgStyleComponent } from './modules/angular/ng-style/ng-style.component';
import { DisplayComponent } from './modules/css/display/display.component';
import { PositionComponent } from './modules/css/position/position.component';
import { BeforeAfterComponent } from './modules/html/before-after/before-after.component';
import { ObservableComponent } from './modules/rxjs/observable/observable.component';


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
  }

]
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
