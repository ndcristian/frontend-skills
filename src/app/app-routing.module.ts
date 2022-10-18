import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PositionComponent } from './modules/css/position/position/position.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'position',
    component: PositionComponent,
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
