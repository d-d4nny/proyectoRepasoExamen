import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaHorariosListaComponent } from './agenda-horarios-lista/agenda-horarios-lista.component';
import { AgendaHorariosDetallesComponent } from './agenda-horarios-detalles/agenda-horarios-detalles.component';

const routes: Routes = [
  { path: '', component: AgendaHorariosListaComponent },
  { path: 'agendaHorarios/:id/edit', component: AgendaHorariosDetallesComponent },
  { path: 'agendaHorarios/new', component: AgendaHorariosDetallesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaHorariosRoutingModule { }
