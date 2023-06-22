import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HousingListComponent } from './housing-list/housing-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HousingResultComponent } from './housing-result/housing-result.component';
import { Routes, RouterModule } from '@angular/router';

const route: Routes = [
  {
    path: 'house/:id',
    component: HousingResultComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HousingListComponent,
    HousingResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
