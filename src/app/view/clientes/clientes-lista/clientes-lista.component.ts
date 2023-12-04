import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../service/clientes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit{

  clientes?: any[];

  constructor(
    private clientesService: ClientesService,
    private ruta: ActivatedRoute
  ){}


  ngOnInit(): void {
      
    //metodo para mostrar todos los clientes
    this.clientesService.getAllClientes().subscribe(
      resp => {
        this.clientes = resp;
        console.log(this.clientes);
      }
    )
  }

  borrar(id: string): void {
    this.clientesService.delete(id).then( ()=> {
      alert("cliente borrado");
      console.log("cliente borrado");
    }).catch(err => console.error(err));
  }
}
