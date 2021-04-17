import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarDetailsComponent} from './car-details/car-details.component';
import {PersonalDetailsComponent} from './personal-details/personal-details.component';
import {CompletePageComponent} from './complete-page/complete-page.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
