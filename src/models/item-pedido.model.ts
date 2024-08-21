// En item-pedido.model.ts
import { Libro } from './libro.model';
export class ItemPedido {
    libro: Libro;
    cantidad: number;
}