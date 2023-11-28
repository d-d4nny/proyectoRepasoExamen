import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaHorariosComponent } from './agenda-horarios.component';

const routes: Routes = [{ path: '', component: AgendaHorariosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaHorariosRoutingModule { }
