import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule, NgFor } from '@angular/common';
import { DatosBackendService } from '../services/datos-backend.service';
import { Location } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-respuestas',
  standalone: true,
  imports: [NavbarComponent, NgFor, CommonModule, NgxPaginationModule, FormsModule, ReactiveFormsModule],
  templateUrl: './respuestas.component.html',
  styleUrl: './respuestas.component.css',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class RespuestasComponent {
  respuestaVentajas:FormGroup = new FormGroup({});
  // data:any[]=[];
  // data1:any;
  // token= localStorage.getItem('token')
  controller:string = "Formulario"
  controllerUpdate:string = "Formulario"
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
      experienciaRespuesta: new FormControl(),
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
    // this.api.getDatos(this.controller, this.token).subscribe({
    //   next: (res) =>{
    //     this.data=res;
    //     console.log(this.data)
    //   },
    //   error: (error) =>{
    //     console.log(error)
    //   }
    // })
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

  onSubmit(){
    this.formSubmitted=true
    if(this.respuestaVentajas.valid){
      // this.token = localStorage.getItem('token')
      let data = this.respuestaVentajas.value
      console.log(data);

      this.api.updatePut(this.controllerUpdate, data, this.id).subscribe({
        next:(res)=>{
          Swal.fire(
            '¡Formulario actualizado!',
            '¡Dale click al boton!',
            'success'
          )
          this._router.navigate(['/respuestaUsuario'])
        },
        error:(error)=>{
          Swal.fire({
            icon: 'error',
            title: 'Algo salio mal en el servidor',
            text: '¡No se pudo actualizar tu formulario!',
          })
        }
      })
    }else{
      window.scroll({
        top:0,
        left:0,
        behavior: 'smooth'
      })
      Swal.fire({
        icon: 'error',
        title: 'Revisa los campos',
        text: '¡El formulario tiene campos vacios o no validos!',
      })
    }
  }

  goBack(): void {
    this.location.back();
  }

}
