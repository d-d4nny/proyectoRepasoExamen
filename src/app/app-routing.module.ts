import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaPrincipalComponent } from './home/bienvenida-principal/bienvenida-principal.component';

const routes: Routes = [
  { path: '', component: BienvenidaPrincipalComponent},
  { 
    path: 'clientes', loadChildren: () => import('./view/clientes/clientes.module').then
    (c => c.ClientesModule) 
  },
  { 
    path: 'agenda-horarios', loadChildren: () => import('./view/agenda-horarios/agenda-horarios.module').then
    (a => a.AgendaHorariosModule) 
  },
  { 
    path: 'citas', loadChildren: () => import('./view/citas/citas.module').then
    (m => m.CitasModule) 
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
