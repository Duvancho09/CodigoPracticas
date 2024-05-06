import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programacion-animada',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './programacion-animada.component.html',
  styleUrl: './programacion-animada.component.css'
})
export class ProgramacionAnimadaComponent {

  constructor(private router: Router){}

  redireccionar(){
    this.router.navigate(['/ventajasUsuario']);
  }

}
