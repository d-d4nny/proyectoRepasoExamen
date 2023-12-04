import { Component, OnInit } from '@angular/core';
import { Clientes } from '../../clientes/interface/clientes';
import { AgendaHorario } from '../../agenda-horarios/interface/agenda-horarios';
import { CitasService } from '../service/citas.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-citas-lista',
  templateUrl: './citas-lista.component.html',
  styleUrls: ['./citas-lista.component.css']
})
export class CitasListaComponent implements OnInit{

  //Variables necesarias
  clientes: any[] = [];
  agendaHorarios: any[] = [];
  agendaHorarioSelect: any;
  clienteSelect: any;
  agendaHorarioComprado?: AgendaHorario;
  clienteCompra?: Clientes;
  
  //Perfil del formulario
  perfileForm = this.formulario.group({
    agendaHorarioSelect: [''],
    clienteSelect: ['']

  });

  constructor(
    private citasService: CitasService,
    private formulario: FormBuilder
  ) { }

  ngOnInit(): void {

    //metodo para mostrar todos las agendas
    this.agendaHorarioSelect.getAllAgendaHorarios().subscribe(
      resp => {
        this.agendaHorarios = resp;
        console.log(this.agendaHorarios);
      }
    )

    //metodo para mostrar todos los clientes
    this.clientesService.getAllClientes().subscribe(
      resp => {
        this.clientes = resp;
        console.log(this.clientes);
      }
    )
  }
}
