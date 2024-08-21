import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Pedido } from '../models/pedido.model';
import { CrearPedidoDto } from './dto/crear-pedido.dto';
import { EstadoPedido } from '../models/estado-pedido.enum';

@Injectable()
export class PedidosService {
  private pedidos: Pedido[] = [];

  async crearPedido(pedidoDto: CrearPedidoDto): Promise<Pedido> {
    // Implementación del método
  }

  obtenerPedido(id: number): Pedido {
    const pedido = this.pedidos.find(p => p.id === id);
    if (!pedido) {
      throw new NotFoundException('Pedido no encontrado');
    }
    return pedido;
  }

  obtenerTodosLosPedidos(): Pedido[] {
    return this.pedidos;
  }

  modificarEstadoPedido(id: number, nuevoEstado: EstadoPedido): Pedido {
    const pedido = this.obtenerPedido(id);
    // Implementación del método
  }
}




