import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSerializer } from '@angular/router';
import {HomeComponent} from "./components/home/home.component"
import {WidgetsComponent} from './components/widgets/widgets.component'
import { from } from 'rxjs';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"dashboard", component: HomeComponent},
  {path:"widgets", component: WidgetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
