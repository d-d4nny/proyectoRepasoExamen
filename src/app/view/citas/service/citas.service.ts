import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, docData, query, updateDoc, where } from '@angular/fire/firestore';
import { doc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  //Colecciones de la base de datos
  citas: string = 'citas';
  clientes: string = 'clientes';
  agendaHorarios: string = 'agendaHorarios';
  
  constructor(
    private firebase: Firestore) { }




  //Metodo del servicio para obtener todas las agendaHorario
  getAllCitas() : Observable<any[]> {
    const collRef = collection(this.firebase, this.citas);
    return collectionData(collRef, {idField: 'id'}) as Observable<any[]>;
  }

  //Metodo del servicio para modificar una agendaHorario en concreto
  updateCita(id: string, cita: any): any{
    const docRef = doc(this.firebase, this.citas, id);
    return updateDoc(docRef, cita);
  }

  //Metodo del servicio para añadir una nueva agendaHorario
  addCita(cita: any){
    const collRef = collection(this.firebase, this.citas);
    return addDoc(collRef, cita);
  }
  
  //Metodo del servicio para obtener un juguete concreto
  getCita(id: string): Observable<any>{
    const docRef = doc(this.firebase, this.citas, id);
    return docData(docRef, {idField: 'id'}) as Observable<any>;
  }

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

  listQuery() : Observable<any[]> {
    const collRef = collection(this.firebase, this.agendaHorarios);
    const qRef = query(collRef, where('estado', '==', false));
    return collectionData(qRef, {idField: 'id'}) as Observable<any[]>;
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

   //Metodo del servicio para borrar una cita en concreto
   delete(id: string){
    const docRef = doc(this.firebase, this.citas, id);
    return deleteDoc(docRef);
  }
}
