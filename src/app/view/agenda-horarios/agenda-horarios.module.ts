import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaHorariosRoutingModule } from './agenda-horarios-routing.module';
import { AgendaHorariosDetallesComponent } from './agenda-horarios-detalles/agenda-horarios-detalles.component';
import { AgendaHorariosListaComponent } from './agenda-horarios-lista/agenda-horarios-lista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AgendaHorariosDetallesComponent,
    AgendaHorariosListaComponent
  ],
  imports: [
    CommonModule,
    AgendaHorariosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AgendaHorariosModule { }
