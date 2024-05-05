import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { DynamicListComponent } from '../dynamic-list/dynamic-list.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [NavbarComponent, DynamicListComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

}
