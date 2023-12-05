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


  //Metodo del servicio para obtener todos los juguetes
  listCliente() : Observable<any[]> {
    const collRef = collection(this.firebase, this.clientes);
    return collectionData(collRef, {idField: 'id'}) as Observable<any[]>;
  }

  //Metodo del servicio para obtener todos los juguetes
  listAgendaHorario() : Observable<any[]> {
    const collRef = collection(this.firebase, this.agendaHorarios);
    return collectionData(collRef, {idField: 'id'}) as Observable<any[]>;
  }
  
  //Metodo del servicio para obtener un juguete concreto
  getCliente(id: string): Observable<any>{
    const docRef = doc(this.firebase, this.clientes, id);
    return docData(docRef, {idField: 'id'}) as Observable<any>;
  }

  //Metodo del servicio para obtener un juguete concreto
  getAgendaHorario(id: string): Observable<any>{
    const docRef = doc(this.firebase, this.agendaHorarios, id);
    return docData(docRef, {idField: 'id'}) as Observable<any>;
  }
}
