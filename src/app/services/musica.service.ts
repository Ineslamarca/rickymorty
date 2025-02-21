import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Hace que el servicio esté disponible en toda la app
})
export class MusicaService {
  
  private canciones: { titulo: string, artista: string }[] = [
    { titulo: 'Evilmorty', artista: 'Rick y morty' },
    { titulo: 'Jazz serpentino', artista: 'Rick y morty' },
    { titulo: 'Rickinillo', artista: 'Rick y morty' }
  ];

  constructor() { }

  // Obtener la lista de canciones
  obtenerCanciones() {
    return this.canciones;
  }

  // Agregar una nueva canción
  agregarCancion(titulo: string, artista: string) {
    this.canciones.push({ titulo, artista });
  }

  // Eliminar una canción por su título
  eliminarCancion(titulo: string) {
    this.canciones = this.canciones.filter(cancion => cancion.titulo !== titulo);
  }
}
