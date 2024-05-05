import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgFor } from '@angular/common';
import { DynamicListComponent } from '../dynamic-list/dynamic-list.component';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-tabla-usuario',
  standalone: true,
  imports: [NavbarComponent, NgFor, DynamicListComponent],
  templateUrl: './tabla-usuario.component.html',
  styleUrl: './tabla-usuario.component.css'
})
export class TablaUsuarioComponent {
  datos: any [] = [];

  constructor(private datosService: DatosService) { }

  ngOnInit(): void{
    this.datos = this.datosService.obtenerDatos();
  }

  eliminar(index: number){
    this.datosService.eliminarDato(index);
    this.datos = this.datosService.obtenerDatos();
  }

}
