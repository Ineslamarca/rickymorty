import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para usar directivas básicas de Angular

@Component({
  selector: 'app-temporadas',
  standalone: true, // Declara el componente como standalone
  templateUrl: './temporadas.component.html',
  styleUrls: ['./temporadas.component.css'],
  imports: [CommonModule], // Correctamente ubicado
})
export class TemporadasComponent {
  titulo = "Temporadas";  // Variable para el título//
  propertyBinding = "red";  // Variable para la propiedad de color//

}

