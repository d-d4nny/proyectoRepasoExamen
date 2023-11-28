import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaPrincipalComponent } from './home/bienvenida-principal/bienvenida-principal.component';

const routes: Routes = [
  { path: '', component: BienvenidaPrincipalComponent},
  { path: '.\view', loadChildren: () => import('./view/clientes/clientes.module').then(m => m.ClientesModule) },
  { path: '.\view', loadChildren: () => import('./view/agenda-horarios/agenda-horarios.module').then(m => m.AgendaHorariosModule) },
  { path: '.\view', loadChildren: () => import('./view/citas/citas.module').then(m => m.CitasModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
