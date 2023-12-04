import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, docData, updateDoc } from '@angular/fire/firestore';
import { doc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaHorariosService {

  coleccion = 'agendaHorarios';
  
  constructor(
    private firebase: Firestore) { }

    //Metodo del servicio para obtener todas las agendaHorario
  getAllAgendaHorarios() : Observable<any[]> {
    const collRef = collection(this.firebase, this.coleccion);
    return collectionData(collRef, {idField: 'id'}) as Observable<any[]>;
  }

  //Metodo del servicio para obtener una agendaHorario concreta
  getAgendaHorario(id: string): Observable<any>{
    const docRef = doc(this.firebase, this.coleccion, id);
    return docData(docRef, {idField: 'id'}) as Observable<any>;
  }

  //Metodo del servicio para modificar una agendaHorario en concreto
  updateAgendaHorario(id: string, agendaHorario: any): any{
    const docRef = doc(this.firebase, this.coleccion, id);
    return updateDoc(docRef, agendaHorario);
  }

  //Metodo del servicio para añadir una nueva agendaHorario
  addAgendaHorario(agendaHorario: any){
    const collRef = collection(this.firebase, this.coleccion);
    return addDoc(collRef, agendaHorario);
  }

  //Metodo del servicio para borrar una agendaHorario en concreto
  delete(id: string){
    const docRef = doc(this.firebase, this.coleccion, id);
    return deleteDoc(docRef);
  }
}
