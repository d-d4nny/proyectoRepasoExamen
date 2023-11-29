import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment.development';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContenedorPrincipalComponent } from './home/contenedor-principal/contenedor-principal.component';
import { homeModule } from './home/home.module';
import { BienvenidaPrincipalComponent } from './home/bienvenida-principal/bienvenida-principal.component';
import { MensajeComponent } from './shared/mensaje/mensaje.component';
import { CitasModule } from './view/citas/citas.module';
import { ClientesModule } from './view/clientes/clientes.module';
import { AgendaHorariosModule } from './view/agenda-horarios/agenda-horarios.module';

@NgModule({
  declarations: [
    AppComponent,
    ContenedorPrincipalComponent,
    BienvenidaPrincipalComponent,
    MensajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    homeModule,
    NgbModule,
    CitasModule,
    ClientesModule,
    AgendaHorariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
