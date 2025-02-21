import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para usar directivas básicas de Angular

@Component({
  selector: 'app-page-not-found',
  standalone: true, // Declara el componente como standalone
  imports: [CommonModule], // Correctamente ubicado
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

}
