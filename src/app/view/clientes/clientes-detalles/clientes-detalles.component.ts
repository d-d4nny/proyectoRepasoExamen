import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../service/clientes.service';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-clientes-detalles',
  templateUrl: './clientes-detalles.component.html',
  styleUrls: ['./clientes-detalles.component.css']
})
export class ClientesDetallesComponent implements OnInit {

  cliente?: any;
  nuevoCliente: boolean = false;

  perfileForm = this.fb.group({
    
    nombre:[''],
    apellidos:[''],
    dni:[''],
    telefono:[''],
    email:['']
  });

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder, 
    private clientesService: ClientesService,
    private location: Location
  ) {}

  ngOnInit(): void {
      
    if(this.route.snapshot.paramMap.get('id')){

      this.nuevoCliente = false;
      let id = String(this.route.snapshot.paramMap.get('id'));
      console.log(id);

      this.clientesService.getCliente(id).subscribe((resp: any)=>{
        console.log(resp.payload.data());
        this.perfileForm.setValue({...resp.payload.data()});
      });

    }else{
      this.nuevoCliente = true;
    }
  }


  guardar(): void{
    
    if(this.nuevoCliente){
      console.log(this.perfileForm.value);
      this.clientesService.addCliente(this.perfileForm.value).then(
        () => {
          alert("Nuevo cliente creado");
          console.log("Nuevo cliente creado");
        }, (error:any) => {
          console.log(error);
        }
      );

    }else{

      let id = String(this.route.snapshot.paramMap.get('id'));
      console.warn(this.perfileForm.value);

      this.clientesService.updateCliente(id, this.perfileForm.value).then(
        () => {
          alert("Cliente actualizado");
          console.log("Cliente actualizado");
        }, (error:any) => {
          console.log(error);
        }
      );
    }
  }

  volver(): void {
    this.location.back();
  }
}
