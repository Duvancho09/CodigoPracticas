import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgFor } from '@angular/common';
import { DynamicListComponent } from '../dynamic-list/dynamic-list.component';
import { DatosService } from '../services/datos.service';
import { DatosBackendService } from '../services/datos-backend.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-usuario',
  standalone: true,
  imports: [NavbarComponent, NgFor, DynamicListComponent],
  templateUrl: './tabla-usuario.component.html',
  styleUrl: './tabla-usuario.component.css'
})
export class TablaUsuarioComponent {
  datos: any [] = [];
  mostrarTabla: boolean = false;

  constructor(private datosService: DatosService, private api: DatosBackendService, private router: Router) { }

  ngOnInit(): void{
    this.datos = this.datosService.obtenerDatos();
    // this.api.getDatos().subscribe({
    //   next: (res) => {
    //     this.datos = res;
    //     console.log(this.datos);
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   }
    // })
    setTimeout(() => {
      this.mostrarTabla = true;
    }, 500);
    setTimeout(() => {
      this.router.navigate(['/programacionAnimada']);
    }, 7000);
  }

  eliminar(index: number){
    this.datosService.eliminarDato(index);
    this.datos = this.datosService.obtenerDatos();
  }

}
