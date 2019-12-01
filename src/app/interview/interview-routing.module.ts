/**
 * @author:Mayur Patel
 * @description: routing module for the interview form container
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterViewContainerComponent } from './interview-container/interview-container';

const routes: Routes = [
  {
    path: '',
    component: InterViewContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterViewContainerRoutingModule { }
