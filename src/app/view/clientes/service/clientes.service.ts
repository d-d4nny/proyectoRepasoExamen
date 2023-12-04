import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, docData, updateDoc } from '@angular/fire/firestore';
import { doc } from 'firebase/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  coleccion = 'clientes';

  constructor(
    private firebase: Firestore) { }

    //Metodo del servicio para obtener todos los juguetes
  getAllClientes() : Observable<any[]> {
    const collRef = collection(this.firebase, this.coleccion);
    return collectionData(collRef, {idField: 'id'}) as Observable<any[]>;
  }

  //Metodo del servicio para obtener un juguete concreto
  getCliente(id: string): Observable<any>{
    const docRef = doc(this.firebase, this.coleccion, id);
    return docData(docRef, {idField: 'id'}) as Observable<any>;
  }

  //Metodo del servicio para modificar un juguete en concreto
  updateCliente(id: string, cliente: any): any{
    const docRef = doc(this.firebase, this.coleccion, id);
    return updateDoc(docRef, cliente);
  }

  //Metodo del servicio para añadir un nuevo juguete
  addCliente(cliente: any){
    const collRef = collection(this.firebase, this.coleccion);
    return addDoc(collRef, cliente);
  }

  //Metodo del servicio para borrar un juguete en concreto
  delete(id: string){
    const docRef = doc(this.firebase, this.coleccion, id);
    return deleteDoc(docRef);
  }
}
