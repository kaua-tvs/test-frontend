import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphicComponent } from './components/graphic/graphic.component';
import { HomeComponent } from './containers/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
