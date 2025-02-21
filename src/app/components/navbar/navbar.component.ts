import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [ RouterLink],
  standalone: true,
})
export class NavbarComponent {
  propertyBinding = 'red'; // Variable para la propiedad de color

  verTitulo() {
    console.log('Pulsa Aquí'); // Solo se ve en consola
  }

  scrollToAnchor(anchor: string) {
    const element = document.getElementById(anchor); // Busca el elemento con el ID especificado
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Desplaza suavemente hacia esa sección
    }
  }
}
