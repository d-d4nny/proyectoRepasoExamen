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
  agendaHorarioCitado?: AgendaHorario; //| undefined = undefined;
  clienteCitado?: Clientes;

  //agendaOptions: { id: string, display: string }[] = [];
  
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


    // this.agendaOptions = this.agendaHorarios.map(agenda => ({
    //   id: agenda.id,
    //   display: this.mostrarCampos(agenda, this.agendaHorarioCitado)
    // }));


    //Cargamos todos los clientes disponibles en la base de datos
    this.citasService.listCliente().subscribe(
      resp => {
        this.clientes = resp;
        console.log(this.clientes);
      }
    )
   
    //Cargamos el catalogo disponible de agendaHorarios
    this.citasService.listAgendaHorario().subscribe(
      resp => {
        this.agendaHorarios = resp;
        console.log(this.agendaHorarios);
      }
    )
  }

  //Metodo para guardar cita
  cita(): void{

    //Guardamos los identificadores recogidos en el formulario
    let idAgendaHorario = this.perfileForm.value['agendaHorarioSelect'];
    let idCliente = this.perfileForm.value['clienteSelect'];

    //Rescatamos de la base de datos el juguete y el proveedor selecionados por su identificador y mostramos sus datos 
    //para confirmar la compra y motramos mensaje de confirmacion
    this.citasService.getAgendaHorario(idAgendaHorario!).subscribe((resp: any) => {
      console.log("Compra realizada con exito de: " + (resp.payload.data()).nombre + ' por ' + (resp.payload.data()).precioCompra) + '€.';
      this.agendaHorarioCitado = resp.payload.data();
    });
    
    this.citasService.getCliente(idCliente!).subscribe((resp: any) => {
      console.log("Venta realizada a: " + (resp.payload.data()).nombreCompleto);
      this.clienteCitado = resp.payload.data();
    });

    alert('Compra realizada!!!');
  
  }

  mostrarCampos(ag: AgendaHorario): string {
    return `Fecha: ${ag.fechaCita}, Entrevistador: ${ag.entrevistador}, Hora: ${ag.horarioDisponible}`;
  }
}
