import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitasListaComponent } from './citas-lista/citas-lista.component';
import { CitasDetallesComponent } from './citas-detalles/citas-detalles.component';

const routes: Routes = [
  { path: '', component: CitasListaComponent },
  { path: 'citas/:id/edit', component: CitasDetallesComponent },
  { path: 'citas/new', component: CitasDetallesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }
