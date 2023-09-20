import OrderGateway from "@/app/infra/gateways/OrderGateway";

export default class DeleteOrder {
  constructor(readonly orderGateway: OrderGateway){}

  async execute (id: number) {
    const orders = await this.orderGateway.deleteOrder(id);
    return orders;
  }
}