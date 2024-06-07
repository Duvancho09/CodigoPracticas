import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule, NgFor } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { DatosBackendService } from '../services/datos-backend.service';

@Component({
  selector: 'app-respuesta-usuario',
  standalone: true,
  imports: [NavbarComponent, NgFor, CommonModule, NgxPaginationModule],
  templateUrl: './respuesta-usuario.component.html',
  styleUrl: './respuesta-usuario.component.css',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class RespuestaUsuarioComponent {
  data:any;
  token!:string;
  controller:string = "Datos"
  page:any;

  constructor(private api: DatosBackendService, private location: Location, private router: Router){}

  ngOnInit(){
    this.api.getDatos(this.controller).subscribe({
      next: (res) => {
        this.data=res;
        console.log(this.data)
      },
      error: (error) =>{
        console.log(error)
      }
    })
  }

  goBack(): void {
    this.router.navigate(['/frameworks']);
  }

}
