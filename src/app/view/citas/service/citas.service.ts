import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, docData, updateDoc } from '@angular/fire/firestore';
import { doc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  //Colecciones de la base de datos
  clientes: string = 'clientes';
  agendaHorarios: string = 'agendaHorarios';
  
  constructor(
    private firebase: Firestore) { }

    
  //Metodo del servicio para rescatar de la base de datos a todos los proveedores
  listProveedor(): any {
    return this.firebase.collection(this.clientes).snapshotChanges();
  }

  //Metodo del servicio para rescatar de la base de datos a todos los juguetes
  listJuguete(): any {
    return this.firebase.collection(this.agendaHorarios).snapshotChanges();
  }

  //Metodo del servicio para rescatar de la base de datos a un juguete en concreto
  getJuguete(id: string): any{
    return this.firebase.collection(this.agendaHorarios).doc(id).snapshotChanges();
  }

  //Metodo del servicio para rescatar de la base de datos a un proveedor en concreto
  getProveedor(id: string): any{
    return this.firebase.collection(this.clientes).doc(id).snapshotChanges();
  }
}
