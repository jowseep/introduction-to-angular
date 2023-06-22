import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HousingResultComponent } from './housing-result/housing-result.component'

const route: Routes = [
  {
    path: 'housing-result/:id',
    component: HousingResultComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route),
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
