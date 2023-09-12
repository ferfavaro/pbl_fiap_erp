import OrderGateway from "@/app/infra/gateways/OrderGateway";

export default class GetAllOrders {
  constructor(readonly orderGateway: OrderGateway){}

  async execute () {
    const orders = await this.orderGateway.getAllOrders();
    return orders;
  }
}