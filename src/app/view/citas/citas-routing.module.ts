import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitasListaComponent } from './citas-lista/citas-lista.component';

const routes: Routes = [
  { path: '', component: CitasListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }
