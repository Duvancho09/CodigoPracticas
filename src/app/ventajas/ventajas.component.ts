import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

const enterTransition = transition(':enter', [
  query('.contenedor__icono', [
  style({ transform: 'translateY(100%)',
  opacity: 0 }),
  stagger(100, [
    animate('0.5s ease-in', style({ transform: 'translateY(0)', opacity: 1}))
  ])
])
]);

const translateY = trigger('translateY', [enterTransition])

@Component({
  selector: 'app-ventajas',
  standalone: true,
  imports: [NavbarComponent, NgClass],
  templateUrl: './ventajas.component.html',
  styleUrl: './ventajas.component.css',
  animations: [translateY]
})
export class VentajasComponent {
  constructor(private router: Router) { }

  public cursorblink:'visible' | 'invisible' = 'visible';
  private timer: any;
  activeIndex: number | null = null;
  isActive:boolean=false;
  private ejecuciones = 0;
  private limiteEjecuciones = 7;
  private terminacion : any;


  ngOnInit() {
    const tiempoEspera = 7000;

    this.terminacion = setInterval(() => {
      if(this.ejecuciones < this.limiteEjecuciones){
        this.aparecer(this.ejecuciones)
        this.ejecuciones++;
      };
      if(this.ejecuciones == 7){
        this.router.navigate(['/frameworks']);
      }
    }, tiempoEspera);
  }
  ngOnDestroy(){
    clearInterval(this.terminacion);
  }

  pararAnimacion(){
    clearInterval(this.terminacion);
  }

  aparecer(index: number) {
    if(this.activeIndex == index){
      this.activeIndex = null
      this.isActive = false
    }else{
      this.activeIndex = index;
      this.isActive = true
    }
  }

}
