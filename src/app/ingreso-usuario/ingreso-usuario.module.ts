import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoUsuarioPageRoutingModule } from './ingreso-usuario-routing.module';

import { IngresoUsuarioPage } from './ingreso-usuario.page';

import { alertModule } from '../alert/alert.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoUsuarioPageRoutingModule,
    ReactiveFormsModule,
    alertModule
  ],
  declarations: [IngresoUsuarioPage]
})
export class IngresoUsuarioPageModule {}
