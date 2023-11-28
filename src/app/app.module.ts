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
import { HeaderPrincipalComponent } from './home/header-principal/header-principal.component';
import { BienvenidaPrincipalComponent } from './home/bienvenida-principal/bienvenida-principal.component';
import { initializeApp as initializeApp_alias, provideFirebaseApp as provideFirebaseApp_alias } from '@angular/fire/app';
import { MensajeComponent } from './shared/mensaje/mensaje.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenedorPrincipalComponent,
    HeaderPrincipalComponent,
    BienvenidaPrincipalComponent,
    MensajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
