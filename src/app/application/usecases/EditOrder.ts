import OrderGateway from "@/app/infra/gateways/OrderGateway";

export default class EditOrder {
  constructor(readonly orderGateway: OrderGateway){}

  async execute (id: string, name: string, dtPedido: number, vlPedido: string) {
    const orders = await this.orderGateway.editOrder(id, name, dtPedido, vlPedido);
    return orders;
  }
}