// En usuario.model.ts
import { Pedido } from './pedido.model';

export class Usuario {
    id: number;
    nombre: string;
    correoElectronico: string;
    contrasena: string;
    direccion: string;
    historialPedidos: Pedido[];
}