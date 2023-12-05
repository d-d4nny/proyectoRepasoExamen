import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CitasListaComponent } from './citas-lista/citas-lista.component';
import { CitasDetallesComponent } from './citas-detalles/citas-detalles.component';


@NgModule({
  declarations: [
    CitasDetallesComponent,
    CitasListaComponent
  ],
  imports: [
    CommonModule,
    CitasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CitasModule { }
