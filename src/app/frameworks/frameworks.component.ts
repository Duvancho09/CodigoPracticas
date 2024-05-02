import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgClass, NgFor } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { Router } from '@angular/router';

register();

@Component({
  selector: 'app-frameworks',
  standalone: true,
  imports: [NavbarComponent, NgClass, NgFor],
  templateUrl: './frameworks.component.html',
  styleUrl: './frameworks.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrameworksComponent {
  texto: string[] = ["Algunos frameworks para páginas web animadas"]
  currentIndex = 0;
  activarCartel: boolean = false;
  terminacion: any;
  constructor(private router: Router) { }

  // Carrusel para las empresas
  images = [
    '/assets/imgs/html.png',
    '/assets/imgs/css1.png',
    '/assets/imgs/js2.png',
    '/assets/imgs/php1.jpg',
    '/assets/imgs/java.jpg',
    '/assets/imgs/python.png',
    '/assets/imgs/html.png',
    '/assets/imgs/css1.png',
    '/assets/imgs/js2.png',
    '/assets/imgs/php1.jpg',
    '/assets/imgs/java.jpg',
    '/assets/imgs/python.png',
    '/assets/imgs/html.png',
    '/assets/imgs/css1.png',
    '/assets/imgs/js2.png',
    '/assets/imgs/php1.jpg',
    '/assets/imgs/java.jpg',
    '/assets/imgs/python.png',
    '/assets/imgs/html.png',
    '/assets/imgs/css1.png',
    '/assets/imgs/js2.png',
    '/assets/imgs/php1.jpg',
    '/assets/imgs/java.jpg',
    '/assets/imgs/python.png',
  ];

  currentIndex1 = 0;
  nextIndex = (this.currentIndex1 + 1) % this.images.length;
  intervalId: any;

  ngOnInit(){
    this.startCarousel();
    setTimeout(() => {
      this.router.navigate(['/contacto']);
    }, 9000);
  }
  ngOnDestroy() {
    clearInterval(this.terminacion);
    this.stopCarousel();
  }
  startCarousel() {
    this.intervalId = setInterval(() => {
      this.showNext();
    }, 2500);
  }
  stopCarousel() {
    clearInterval(this.intervalId);
  }
  showNext() {
    this.currentIndex1 = (this.currentIndex1 + 1) % this.images.length;
    this.nextIndex = (this.currentIndex1 + 1) % this.images.length;
  }
  showPrev() {
    this.currentIndex1 = (this.currentIndex1 + 1 + this.images.length) % this.images.length;
    this.nextIndex = (this.currentIndex1 + 1) % this.images.length;
  }

}
