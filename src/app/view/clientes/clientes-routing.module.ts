import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { ClientesDetallesComponent } from './clientes-detalles/clientes-detalles.component';


const routes: Routes = [
  { path: '', component: ClientesListaComponent },
  { path: 'clientes/:id/edit', component: ClientesDetallesComponent },
  { path: 'clientes/new', component: ClientesDetallesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
