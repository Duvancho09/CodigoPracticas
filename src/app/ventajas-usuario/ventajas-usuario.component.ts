import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { DatosBackendService } from '../services/datos-backend.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ventajas-usuario',
  standalone: true,
  imports: [NavbarComponent, FormsModule, NgFor, ReactiveFormsModule, CommonModule],
  templateUrl: './ventajas-usuario.component.html',
  styleUrl: './ventajas-usuario.component.css'
})
export class VentajasUsuarioComponent {
  formularioVentajas = new FormGroup({
    experiencia: new FormControl('', [Validators.required]),
    experienciaRespuesta: new FormControl('', [Validators.required, Validators.maxLength(400)]),
    atencion: new FormControl('', [Validators.required]),
    atencionRespuesta: new FormControl('', [Validators.required, Validators.maxLength(400)]),
    complejas: new FormControl('', [Validators.required]),
    complejasRespuesta: new FormControl('', [Validators.required, Validators.maxLength(400)]),
    interactividad: new FormControl('', [Validators.required]),
    interactividadRespuesta: new FormControl('', [Validators.required, Validators.maxLength(400)]),
    clasicas: new FormControl('', [Validators.required]),
    clasicasRespuesta: new FormControl('', [Validators.required, Validators.maxLength(400)]),
    optimas: new FormControl('', [Validators.required]),
    optimasRespuesta: new FormControl('', [Validators.required, Validators.maxLength(400)]),
  });

  controllerVentajas:string = "Formulario";
  token = localStorage.getItem('token')

  constructor(private router: Router, private api: DatosBackendService){}

  ngOnInit(): void{}

  formulario(){
    if(this.formularioVentajas.valid){
      const token = localStorage.getItem('token')
      let data = this.formularioVentajas.value
      console.log(data);
      this.api.formularioPost(data, this.controllerVentajas).subscribe({
        next:(res) => {
          Swal.fire(
            '¡Gracias por llenar el formulario!',
            '¡Sigue disfrutando de la experiencia en la página!',
            'success',
          )
        },
        error:(error)=>{
          Swal.fire({
            icon: 'error',
            title: 'Algo salio mal en el servidor',
            text: '¡No se pudo registrar los datos del formulario!',
          })
        }
      })
      this.router.navigate(['/ventajas']);
      setTimeout(() => {
        if(document.querySelector('.swal2-container')){
          Swal.close();
        }
      }, 5000);
    }else{
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      Swal.fire({
        icon: 'error',
        title: 'Por favor revisa el formulario',
        text: '¡El formulario tiene!'
      })
    }
  }

}
