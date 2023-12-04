import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, docData, updateDoc } from '@angular/fire/firestore';
import { doc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  coleccion = 'citas';
  
  constructor(
    private firebase: Firestore) { }

    //Metodo del servicio para obtener todas las citas
  getAllCitas() : Observable<any[]> {
    const collRef = collection(this.firebase, this.coleccion);
    return collectionData(collRef, {idField: 'id'}) as Observable<any[]>;
  }

  //Metodo del servicio para obtener una cita concreta
  getCita(id: string): Observable<any>{
    const docRef = doc(this.firebase, this.coleccion, id);
    return docData(docRef, {idField: 'id'}) as Observable<any>;
  }

  //Metodo del servicio para modificar una cita en concreto
  updateCita(id: string, cita: any): any{
    const docRef = doc(this.firebase, this.coleccion, id);
    return updateDoc(docRef, cita);
  }

  //Metodo del servicio para añadir una nueva cita
  addCita(cita: any){
    const collRef = collection(this.firebase, this.coleccion);
    return addDoc(collRef, cita);
  }

  //Metodo del servicio para borrar una cita en concreto
  delete(id: string){
    const docRef = doc(this.firebase, this.coleccion, id);
    return deleteDoc(docRef);
  }
}
