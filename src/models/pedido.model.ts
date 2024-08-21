// src/models/pedido.model.ts
import { Usuario } from './usuario.model';
import { ItemPedido } from './item-pedido.model';

export class Pedido {
  id: number;
  usuario: Usuario;
  fechaPedido: Date;
  estado: 'pendiente' | 'en proceso' | 'enviado' | 'entregado';
  total: number;
  items: ItemPedido[];
}

