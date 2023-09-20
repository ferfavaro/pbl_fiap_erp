import OrderGateway from "@/app/infra/gateways/OrderGateway";

export default class AddOrder {
  constructor(readonly orderGateway: OrderGateway){}

  async execute (name: string, dtPedido: string, vlPedido: string, idCliente: number) {
    const orders = await this.orderGateway.createOrder(name, dtPedido, vlPedido, idCliente);
    return orders;
  }
}