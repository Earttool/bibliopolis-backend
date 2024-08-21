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
  obtenerPedido(@Param('id') id: string) {
    const pedidoId = parseInt(id, 10); // Asegurarse de que id sea un número
    return this.pedidosService.obtenerPedido(pedidoId);
  }

  @Get()
  obtenerTodosLosPedidos() {
    return this.pedidosService.obtenerTodosLosPedidos();
  }

  @Patch(':id/estado')
  modificarEstadoPedido(@Param('id') id: string, @Body() { estado }: ModificarEstadoPedidoDto) {
    const pedidoId = parseInt(id, 10); // Asegurarse de que id sea un número
    return this.pedidosService.modificarEstadoPedido(pedidoId, estado as EstadoPedido);
  }
}



