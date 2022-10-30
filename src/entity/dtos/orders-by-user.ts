export class OrdersByUser {
  dtPedido: Date;
  dtPedidoFormatted: string;
  qtdItens: number;

  constructor(dtPedido: Date, dtPedidoFormatted: string, qtdItems: number) {
    this.dtPedido = dtPedido;
    this.dtPedidoFormatted = dtPedidoFormatted;
    this.qtdItens = qtdItems;
  }
}
