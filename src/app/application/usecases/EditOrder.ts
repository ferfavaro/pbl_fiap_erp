import OrderGateway from "@/app/infra/gateways/OrderGateway";

export default class EditOrder {
  constructor(readonly orderGateway: OrderGateway){}

  async execute (id: number, name: string, dtPedido: string, vlPedido: string, idCliente: number) {
    const orders = await this.orderGateway.editOrder(id, name, dtPedido, vlPedido, idCliente);
    return orders;
  }
}