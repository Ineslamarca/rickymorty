import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Hace que el servicio esté disponible globalmente
})
export class UserService {
  private usuarios: { email: string; password: string }[] = [];

  constructor() {
    // Cargar usuarios almacenados en localStorage al iniciar
    const storedUsers = localStorage.getItem('usuarios');
    if (storedUsers) {
      this.usuarios = JSON.parse(storedUsers);
    }
  }

  registrar(email: string, password: string): boolean {
    const usuarioExistente = this.usuarios.find(user => user.email === email);
    if (usuarioExistente) {
      return false; // Ya existe el usuario
    }

    this.usuarios.push({ email, password });
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios)); // Guardar en localStorage
    return true;
  }

  login(email: string, password: string): boolean {
    const usuario = this.usuarios.find(user => user.email === email && user.password === password);
    if (usuario) {
      localStorage.setItem('usuarioActual', email);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('usuarioActual');
  }

  estaAutenticado(): boolean {
    return localStorage.getItem('usuarioActual') !== null;
  }
}
