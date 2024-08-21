// src/pedidos/dto/modificar-estado-pedido.dto.ts
import { IsString, IsIn } from 'class-validator';
import { EstadoPedido } from '../../models/estado-pedido.enum';

export class ModificarEstadoPedidoDto {
  @IsString()
  @IsIn([EstadoPedido.PENDIENTE, EstadoPedido.EN_PROCESO, EstadoPedido.ENVIADO, EstadoPedido.ENTREGADO])
  readonly estado: string;
}

