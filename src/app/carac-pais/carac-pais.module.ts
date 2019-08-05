import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CaracPaisPage } from './carac-pais.page';

const routes: Routes = [
  {
    path: '',
    component: CaracPaisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CaracPaisPage]
})
export class CaracPaisPageModule {}
