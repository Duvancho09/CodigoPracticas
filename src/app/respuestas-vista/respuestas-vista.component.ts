import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { DatosBackendService } from '../services/datos-backend.service';
import { Location } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-respuestas-vista',
  standalone: true,
  imports: [NavbarComponent, NgFor, CommonModule, NgxPaginationModule, FormsModule, ReactiveFormsModule],
  templateUrl: './respuestas-vista.component.html',
  styleUrl: './respuestas-vista.component.css',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class RespuestasVistaComponent {
  respuestaVentajas:FormGroup = new FormGroup({});
  controller:string = "Formulario"
  page:any;
  id:any;
  formSubmitted:boolean=false;
  dataRespuesta:any;

  constructor(private api: DatosBackendService, private location: Location, private route: ActivatedRoute, private _router:Router){}

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.respuestaVentajas = new FormGroup({
      experiencia: new FormControl(),
      experienciaRespuesta: new FormControl('', [Validators.maxLength(600)]),
      atencion: new FormControl(),
      atencionRespuesta: new FormControl(),
      complejas: new FormControl(),
      complejasRespuesta: new FormControl(),
      interactividad: new FormControl(),
      interactividadRespuesta: new FormControl(),
      clasicas: new FormControl(),
      clasicasRespuesta: new FormControl(),
      optimas: new FormControl(),
      optimasRespuesta: new FormControl(),
    });
    this.respuesta();

}


respuesta(){
  this.api.getById(this.controller, this.id).subscribe({
    next: (res)=>{
      this.dataRespuesta=res;
      console.log(this.dataRespuesta)
    },
    error: (error)=>{
      console.log(error)
    }
  })
}
goBack(): void {
  this.location.back();
}

}
