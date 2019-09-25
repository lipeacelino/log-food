class Pedido {
    constructor(
      public address: string,
      public number: number,
      public optionalAddress: string,
      public paymentOption: string,
      public pedidoItems: PedidoItem[] = []
    ){}
  }

class PedidoItem {
    constructor(public quantity: number, public menuId: string){}
  }
export {Pedido, PedidoItem}
