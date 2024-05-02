import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface TodoItem {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'dynamic-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './dynamic-list.component.html',
  styleUrl: './dynamic-list.component.css'
})
export class DynamicListComponent {
  todoList: TodoItem[] = [];
  newTask: string = '';

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
