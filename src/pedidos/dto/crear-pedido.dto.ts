// src/pedidos/dto/crear-pedido.dto.ts
import { IsArray, IsNumber, IsNotEmpty, ArrayNotEmpty } from 'class-validator';

export class CrearPedidoDto {
  @IsNumber()
  @IsNotEmpty()
  readonly usuarioId: number;

  @IsArray()
  @ArrayNotEmpty()
  readonly items: Array<{ libroId: number; cantidad: number }>;
}


