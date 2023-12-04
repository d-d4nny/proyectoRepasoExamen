import { Component, OnInit } from '@angular/core';
import { AgendaHorariosService } from '../service/agenda-horarios.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agenda-horarios-lista',
  templateUrl: './agenda-horarios-lista.component.html',
  styleUrls: ['./agenda-horarios-lista.component.css']
})
export class AgendaHorariosListaComponent implements OnInit{

    //Variable necesaria
    agendaHorarios?: any[];

    constructor(

      private agendaHorariosService: AgendaHorariosService,
      private ruta: ActivatedRoute
    ) { }

    ngOnInit(): void {
      
      //metodo para mostrar todos las agendas
      this.agendaHorariosService.getAllAgendaHorarios().subscribe(
        resp => {
          this.agendaHorarios = resp;
          console.log(this.agendaHorarios);
        }
      )
    }
  
    borrar(id: string): void {
      this.agendaHorariosService.delete(id).then( ()=> {
        alert("Agenda borrado");
        console.log("Agenda borrado");
      }).catch(err => console.error(err));
    }
}
