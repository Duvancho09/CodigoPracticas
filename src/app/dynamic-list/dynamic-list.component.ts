import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatosService } from '../services/datos.service';
import { Router } from '@angular/router';

interface TodoItem {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'dynamic-list',
  standalone: true,
  imports: [NgFor, FormsModule, NgIf],
  templateUrl: './dynamic-list.component.html',
  styleUrl: './dynamic-list.component.css'
})
export class DynamicListComponent {
  guardadoExitoso: boolean = false;
  datos: any = {};
  todoList: TodoItem[] = [];
  newTask: string = '';

  constructor(private datosService: DatosService, private router: Router){}

  ngOnInit(): void{}

  guardarDatos() {
    this.datosService.guardarDatos(this.datos);
    this.router.navigate(['tablas']);
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
