import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { CitasComponent } from './citas.component';
import { CitasListaComponent } from './citas-lista/citas-lista.component';
import { CitasDetallesComponent } from './citas-detalles/citas-detalles.component';


@NgModule({
  declarations: [
    CitasComponent,
    CitasListaComponent,
    CitasDetallesComponent
  ],
  imports: [
    CommonModule,
    CitasRoutingModule
  ]
})
export class CitasModule { }
