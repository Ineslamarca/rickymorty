import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule], // Agregar FormsModule
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  email = '';
  password = '';
  mensaje = '';
  usuarioAutenticado = false;

  constructor(private userService: UserService) {
    this.usuarioAutenticado = this.userService.estaAutenticado();
  }

  registrar() {
    if (this.userService.registrar(this.email, this.password)) {
      this.mensaje = ' Registro valido. Ahora puedes iniciar sesión.';
    } else {
      this.mensaje = ' El usuario ya existe.';
    }
  }

  login() {
    if (this.userService.login(this.email, this.password)) {
      this.usuarioAutenticado = true;
      this.mensaje = 'Inicio de sesión exitoso.';
    } else {
      this.mensaje = 'Usuario incorrecto';
    }
  }

  logout() {
    this.userService.logout();
    this.usuarioAutenticado = false;
    this.mensaje = 'Sesión cerrada';
  }
}
