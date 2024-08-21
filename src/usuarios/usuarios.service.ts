// src/usuarios/usuarios.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Usuario } from '../models/usuario.model';

@Injectable()
export class UsuariosService {
  private usuarios: Usuario[] = [];

  crearUsuario(usuario: Usuario) {
    const existe = this.usuarios.some(u => u.correoElectronico === usuario.correoElectronico);
    if (existe) {
      throw new Error('El correo electrónico ya está registrado.');
    }
    usuario.id = this.usuarios.length + 1;
    this.usuarios.push(usuario);
    return usuario;
  }

  obtenerUsuario(id: number): Usuario {
    const usuario = this.usuarios.find(u => u.id === id);
    if (!usuario) {
      throw new NotFoundException('Usuario no encontrado');
    }
    return usuario;
  }

  obtenerTodosLosUsuarios(): Omit<Usuario, 'contrasena'>[] {
    return this.usuarios.map(({ contrasena, ...resto }) => resto);
  }

  eliminarUsuario(id: number): void {
    this.usuarios = this.usuarios.filter(u => u.id !== id);
  }
}

