import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Location, NgFor } from '@angular/common';
import { DynamicListComponent } from '../dynamic-list/dynamic-list.component';
import { DatosService } from '../services/datos.service';
import { DatosBackendService } from '../services/datos-backend.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tabla-usuario',
  standalone: true,
  imports: [NavbarComponent, NgFor, DynamicListComponent, HttpClientModule],
  templateUrl: './tabla-usuario.component.html',
  styleUrl: './tabla-usuario.component.css'
})
export class TablaUsuarioComponent {
  data:any;
  token!: string;
  id:any;
  controller:string = "Datos";
  datos: any [] = [];
  mostrarTabla: boolean = false;

  constructor(private datosService: DatosService, private api: DatosBackendService, private router: Router, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.datos = this.datosService.obtenerDatos();
    this.api.getDatos(this.controller).subscribe({
      next: (res)=>{
        this.data=res;
        console.log(this.data)
      },
      error: (error)=> {
        console.log(error)
      }
    })
    setTimeout(() => {
      this.mostrarTabla = true;
    }, 500);
    setTimeout(() => {
      this.router.navigate(['/programacionAnimada']);
    }, 7000);
  }

  eliminar(){
    this.api.delete(this.controller, this.id).subscribe(()=>{
      console.log('Dato eliminado de la base de datos');
    },
    error => {
      console.log('Error al eliminar dato', error);
    }
  )
  }

}
