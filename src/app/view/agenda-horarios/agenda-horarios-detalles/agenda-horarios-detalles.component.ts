import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AgendaHorario, HorasCitasSelect, TipoEntrevistadorSelect } from '../interface/agenda-horarios';
import { Location } from '@angular/common';
import { AgendaHorariosService } from '../service/agenda-horarios.service';


@Component({
  selector: 'app-agenda-horarios-detalles',
  templateUrl: './agenda-horarios-detalles.component.html',
  styleUrls: ['./agenda-horarios-detalles.component.css']
})
export class AgendaHorariosDetallesComponent implements OnInit {

  agendaHorarios?: AgendaHorario;
  nuevaAgendaHorario: boolean = false;
  //Array donde guardaremos los estamos
  tipoEntrevistadorSelect: string[] = [];
  horasCitasSelect: string[] = [];
  nuevaTarea: boolean = false;
 
  perfileForm = this.fb.group({
    
    entrevistador: [''],
    fechaCita: [''],
    horarioDisponible: ['']
});

constructor(
  private route: ActivatedRoute, 
  private fb: FormBuilder, 
  private agendaHorariosService: AgendaHorariosService,
  private location: Location

) { }

ngOnInit() {

  //Rellenamos la array con los posubles estados 
  this.tipoEntrevistadorSelect = TipoEntrevistadorSelect;
  this.horasCitasSelect = HorasCitasSelect;

  //Si hay un identificador en la url rescatamos el horario de la base de datos y rellenamos el formulario
  //con sus datos y asi poder editarlo
  if(this.route.snapshot.paramMap.get('id')){

    this.nuevaAgendaHorario = false;
    let id = String(this.route.snapshot.paramMap.get('id'));
    console.log(id);

    this.agendaHorariosService.getAgendaHorario(id).subscribe((resp: any) => {
      console.log(resp.payload.data());
      this.perfileForm.setValue({...resp.payload.data()});
    });

  }else{
    this.nuevaAgendaHorario = true;
    console.log(this.perfileForm.value);
  }
}

//Metodo para guardar el horario
guardar(): void {

  //Si el horario es nuevo lo creamos en la base de datos con los datos recogidos en el formulario
  if(this.nuevaAgendaHorario){
    this.agendaHorariosService.addAgendaHorario(this.perfileForm.value).then(
      () => {
        alert("Nueva agenda Creada.");
        console.log("Nueva agenda Creado.");
      }, (error: any) => {
        console.log(error);
      }
    );

  }else{

    //Si no es nuevo rescatamos sus datos de la base de datos con la id de la url y modificamos sus datos
    let id = String(this.route.snapshot.paramMap.get('id'));
    console.warn(this.perfileForm.value);

    this.agendaHorariosService.updateAgendaHorario(id, this.perfileForm.value).then(
      () => {
        alert("Agenda Modificada.");
        console.log("Agenda Modificado.");
      }, (error: any) => {
        console.log(error);
      }
    )
  }
}

//Metodo para volver a la vista anterior
volver(): void {
  this.location.back();
}

}

