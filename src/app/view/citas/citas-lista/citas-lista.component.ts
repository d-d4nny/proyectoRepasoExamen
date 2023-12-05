import { Component, OnInit } from '@angular/core';
import { CitasService } from 'src/app/view/citas/service/citas.service';
import { ActivatedRoute } from '@angular/router';
import { Clientes } from '../../clientes/interface/clientes';
import { AgendaHorario } from '../../agenda-horarios/interface/agenda-horarios';

@Component({
  selector: 'app-citas-lista',
  templateUrl: './citas-lista.component.html',
  styleUrls: ['./citas-lista.component.css']
})
export class CitasListaComponent implements OnInit{

    //Variable necesaria
    citas?: any[];
    clienteSelect?: Clientes;
    agendaHorarioSelect?: AgendaHorario;


    constructor(

      private citasService: CitasService,
      private ruta: ActivatedRoute
    ) { }

    ngOnInit(): void {
      
      //metodo para mostrar todos las citas
      this.citasService.getAllCitas().subscribe(
        resp => {
          this.citas = resp;
          console.log(this.citas);
        }
      )
    }
  
    borrar(id: string): void {
      this.citasService.delete(id).then( ()=> {
        alert("Agenda borrado");
        console.log("Agenda borrado");
      }).catch(err => console.error(err));
    }
}
