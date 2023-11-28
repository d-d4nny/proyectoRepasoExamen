import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { ClientesDetallesComponent } from './clientes-detalles/clientes-detalles.component';


@NgModule({
  declarations: [
    ClientesComponent,
    ClientesListaComponent,
    ClientesDetallesComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
