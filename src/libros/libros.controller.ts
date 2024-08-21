import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { Libro } from '../models/libro.model';

@Controller('libros')
export class LibrosController {
  constructor(private readonly librosService: LibrosService) {}

  @Post()
  crearLibro(@Body() libro: Libro) {
    return this.librosService.crearLibro(libro);
  }

  @Get(':isbn')
  obtenerLibro(@Param('isbn') isbn: string) {
    return this.librosService.obtenerLibro(isbn);
  }

  @Get()
  obtenerTodosLosLibros() {
    return this.librosService.obtenerTodosLosLibros();
  }

  @Delete(':isbn')
  eliminarLibro(@Param('isbn') isbn: string) {
    return this.librosService.eliminarLibro(isbn);
  }
}
