import { Component, OnInit } from '@angular/core';
import { Clientes } from '../../clientes/interface/clientes';
import { AgendaHorario } from '../../agenda-horarios/interface/agenda-horarios';
import { CitasService } from '../service/citas.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AgendaHorariosService } from '../../agenda-horarios/service/agenda-horarios.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-citas-detalles',
  templateUrl: './citas-detalles.component.html',
  styleUrls:  ['./citas-detalles.component.css']
})
export class CitasDetallesComponent implements OnInit {
  //Variables necesarias

  nuevaCita: boolean = false;
  citas: any[] = [];
  citasSelect: any;
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
    private route: ActivatedRoute, 
    private citasService: CitasService,
    private formulario: FormBuilder,
    private agendaHorariosService: AgendaHorariosService,
    private location: Location
  ) {}

  ngOnInit(): void {
    // this.agendaOptions = this.agendaHorarios.map(agenda => ({
    //   id: agenda.id,
    //   display: this.mostrarCampos(agenda, this.agendaHorarioCitado)
    // }));

    if(this.route.snapshot.paramMap.get('id')){

      this.nuevaCita = false;
      let id = String(this.route.snapshot.paramMap.get('id'));
      console.log(id);

      this.citasService.getCita(id).subscribe((resp: any)=>{
        console.log(resp.payload.data());
        this.perfileForm.setValue({...resp.payload.data()});
      });

    }else{
      this.nuevaCita = true;
    }



    //Cargamos todos los clientes disponibles en la base de datos
    this.citasService.listCliente().subscribe((resp) => {
      this.clientes = resp;
      console.log(this.clientes);
    });

    //Cargamos el catalogo disponible de agendaHorarios
    this.citasService.listQuery().subscribe((resp) => {
      this.agendaHorarios = resp;
      console.log(this.agendaHorarios);
    });
  }

  //Metodo para guardar cita
  cita(): void {
    //Guardamos los identificadores recogidos en el formulario
    let idAgendaHorario = this.perfileForm.value['agendaHorarioSelect'];
    let idCliente = this.perfileForm.value['clienteSelect'];


    //Si la cita es nueva la creamos en la base de datos con los datos recogidos en el formulario
    if(this.nuevaCita){
      this.citasService.addCita(this.perfileForm.value).then(
        () => {
          this.agendaHorariosService.updateEstado(idAgendaHorario, true).then(
          )
          alert("Nueva Cita Creada.");
          console.log("Nueva Cita Creado.");
        }, (error: any) => {
          console.log(error);
        }
      );
  
    }else{
  
      //Si no es nuevo rescatamos sus datos de la base de datos con la id de la url y modificamos sus datos
      let id = String(this.route.snapshot.paramMap.get('id'));
      console.warn(this.perfileForm.value);
  
      this.citasService.updateCita(id, this.perfileForm.value).then(
        () => {
          this.agendaHorariosService.updateEstado(idAgendaHorario, false).then(
            )
          alert("Cita Modificada.");
          console.log("Cita Modificado.");
        }, (error: any) => {
          console.log(error);
        }
      )
    }

    //Rescatamos de la base de datos la agenda y el cliente selecionados por su identificador y mostramos sus datos
    //para confirmar la cita y motramos mensaje de confirmacion
    this.citasService.getAgendaHorario(idAgendaHorario!).subscribe((resp: any) => { console.log(resp);
      console.log('Cita realizada con exito el dia ' + resp.fechaCita + ' a las ' + resp.horarioDisponible + 'con el ' + resp.entrevistador + '.');
      this.agendaHorarioCitado = resp;
    });

    this.citasService.getCliente(idCliente!).subscribe((resp: any) => {
      console.log('Cliente citado con dni: ' + resp.dni);
      this.clienteCitado = resp;
    });

    alert('Cita realizada!!!');
  }

  mostrarCampos(ag: AgendaHorario): string {
    return `Fecha: ${ag.fechaCita}, Entrevistador: ${ag.entrevistador}, Hora: ${ag.horarioDisponible}`;
  }

  //Metodo para volver a la vista anterior
volver(): void {
  this.location.back();
}
}
