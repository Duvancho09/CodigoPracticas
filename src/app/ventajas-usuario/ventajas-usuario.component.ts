import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ventajas-usuario',
  standalone: true,
  imports: [NavbarComponent, FormsModule],
  templateUrl: './ventajas-usuario.component.html',
  styleUrl: './ventajas-usuario.component.css'
})
export class VentajasUsuarioComponent {

  constructor(private router: Router){}

  ngOnInit(): void{}

  formulario(){
    this.router.navigate(['/ventajas']);
  }

}
