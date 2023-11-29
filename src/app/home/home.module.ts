import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPrincipalComponent } from './header-principal/header-principal.component';
import { RouterLinkWithHref } from '@angular/router';



@NgModule({
  declarations: [
    HeaderPrincipalComponent
  ],
  imports: [
    CommonModule,
    //Sin esta importacion los enlaces del menu no funcionan
    RouterLinkWithHref
  ],

  exports: [
    //Exportamos el componente para poder usarlo en mas sitios
    HeaderPrincipalComponent
  ]
})
export class homeModule { }
