import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatosService } from '../services/datos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { DatosBackendService } from '../services/datos-backend.service';

interface TodoItem {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'dynamic-list',
  standalone: true,
  imports: [NgFor, FormsModule, NgIf, ReactiveFormsModule, CommonModule],
  templateUrl: './dynamic-list.component.html',
  styleUrl: './dynamic-list.component.css'
})
export class DynamicListComponent {
  datosPersonaForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    apellido: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    edad: new FormControl(),
    ciudad: new FormControl('', [Validators.required, Validators.maxLength(30)])
  }); 
  controllerCreate:string = "Datos"
  token = localStorage.getItem('token')
  guardadoExitoso: boolean = false;
  datos: any = {};
  todoList: TodoItem[] = [];
  newTask: string = '';

  constructor(private datosService: DatosService, private router: Router, private api: DatosBackendService){}

  ngOnInit(){
  }

  guardarDatos() {
    if(this.datosPersonaForm.valid){
      const token = localStorage.getItem('token')
      let data = this.datosPersonaForm.value
      data.edad = parseInt(data.edad,10)
      console.log(data);
      this.api.formularioPost(data, this.controllerCreate).subscribe({
        next:(res)=>{
          Swal.fire(
            '¡Gracias por llenar tus datos!',
            '¡Sigue disfrutando de la experiencia en la página!',
            'success',
        )
      },
        error:(error)=>{
          Swal.fire({
            icon: 'error',
            title: 'Algo salio mal en el servidor',
            text: '¡No se pudo registrar tus datos!',
          })
        }
      })
          this.router.navigate(['/tablas']);
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
        text: '¡El formulario tiene campos vacios o no son validos!',
      })
    }
  }

  addTask() {
    if (this.newTask.trim() !== '') {
      this.todoList.push({ task: this.newTask, completed: false });
      this.newTask = ''; // Limpiar el campo después de agregar la tarea
    }
  }

  toggleTask(index: number) {
    this.todoList[index].completed = !this.todoList[index].completed;
  }
  


}
