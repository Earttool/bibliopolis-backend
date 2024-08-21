// src/pedidos/pedidos.controller.ts
import { Controller, Get, Post, Patch, Param, Body } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { CrearPedidoDto } from './dto/crear-pedido.dto';
import { ModificarEstadoPedidoDto } from './dto/modificar-estado-pedido.dto';
import { EstadoPedido } from '../models/estado-pedido.enum';

@Controller('pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Post()
  async crearPedido(@Body() pedidoDto: CrearPedidoDto) {
    return this.pedidosService.crearPedido(pedidoDto);
  }

  @Get(':id')
  obtenerPedido(@Param('id') id: number) {
    return this.pedidosService.obtenerPedido(id);
  }

  @Get()
  obtenerTodosLosPedidos() {
    return this.pedidosService.obtenerTodosLosPedidos();
  }

  @Patch(':id/estado')
  modificarEstadoPedido(@Param('id') id: number, @Body() { estado }: ModificarEstadoPedidoDto) {
    return this.pedidosService.modificarEstadoPedido(id, estado as EstadoPedido);
  }
  
}


