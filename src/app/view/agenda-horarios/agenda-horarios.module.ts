import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaHorariosRoutingModule } from './agenda-horarios-routing.module';
import { AgendaHorariosComponent } from './agenda-horarios.component';
import { AgendaHorariosDetallesComponent } from './agenda-horarios-detalles/agenda-horarios-detalles.component';
import { AgendaHorariosListaComponent } from './agenda-horarios-lista/agenda-horarios-lista.component';


@NgModule({
  declarations: [
    AgendaHorariosComponent,
    AgendaHorariosDetallesComponent,
    AgendaHorariosListaComponent
  ],
  imports: [
    CommonModule,
    AgendaHorariosRoutingModule
  ]
})
export class AgendaHorariosModule { }
