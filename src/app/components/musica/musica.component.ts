import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MusicaService } from '../../services/musica.service';

@Component({
  selector: 'app-musica',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit {

  canciones: { titulo: string, artista: string }[] = [];

  constructor(private musicaService: MusicaService) { }

  ngOnInit(): void {
    this.canciones = this.musicaService.obtenerCanciones();
  }

  agregarCancion() {
    const titulo = prompt("Ingrese el título de la canción:");
    const artista = prompt("Ingrese el artista:");

    if (titulo && artista) {
      this.musicaService.agregarCancion(titulo, artista);
      this.canciones = this.musicaService.obtenerCanciones(); // Actualizar la lista
    }
  }

  eliminarCancion(titulo: string) {
    this.musicaService.eliminarCancion(titulo);
    this.canciones = this.musicaService.obtenerCanciones(); // Actualizar la lista
  }
}
