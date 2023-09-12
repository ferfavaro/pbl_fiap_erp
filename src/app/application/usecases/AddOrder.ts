import OrderGateway from "@/app/infra/gateways/OrderGateway";

export default class AddOrder {
  constructor(readonly orderGateway: OrderGateway){}

  async execute (id: string, name: string, dtPedido: number, vlPedido: string) {
    const orders = await this.orderGateway.createOrder(id, name, dtPedido, vlPedido);
    return orders;
  }
}