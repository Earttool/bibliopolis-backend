import { Injectable, NotFoundException } from '@nestjs/common';
import { Libro } from '../models/libro.model';

@Injectable()
export class LibrosService {
  private libros: Libro[] = [];

  crearLibro(libro: Libro) {
    const existe = this.libros.some(l => l.isbn === libro.isbn);
    if (existe) {
      throw new Error('El ISBN ya está registrado.');
    }
    this.libros.push(libro);
    return libro;
  }

  obtenerLibro(isbn: string): Libro {
    const libro = this.libros.find(l => l.isbn === isbn);
    if (!libro) {
      throw new NotFoundException('Libro no encontrado');
    }
    return libro;
  }

  obtenerTodosLosLibros(): Libro[] {
    return this.libros;
  }

  eliminarLibro(isbn: string): void {
    this.libros = this.libros.filter(l => l.isbn !== isbn);
  }
}

