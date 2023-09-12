import Pedido from "@/app/domain/entities/Pedido";
import HttpClient from "../adapters/HttpClient";

export default class OrderGateway {
  constructor(readonly httpClient: HttpClient) {}

  async getAllOrders() {
    const response = await this.httpClient.get<Output>(
      "http://localhost:8080/pedido/getAllOrders"
    );

    const result: Pedido[] = [];
    for (const orderResponse of response) {
      const orderEntity = new Pedido(
        orderResponse.id_Pedido,
        orderResponse.ds_pedido,
        orderResponse.dt_pedido,
        orderResponse.vl_pedido,
      )
      result.push(orderEntity);
    }
    return result;
  }

  async createOrder(id: string, name: string, dtPedido: number, vlPedido: string) {
    const response = await this.httpClient.post<Output>(
      `localhost:8080/pedido/addPedido/Pedido`, 
      {
        id_Pedido: id,
        ds_pedido: name,
        dt_pedido: dtPedido,
        vl_pedido: vlPedido,
      }
    );
    return response;
  }

  async editOrder(id: string, name: string, dtPedido: number, vlPedido: string) {
    const response = await this.httpClient.update<Output>(
      `localhost:8080/pedido/updateOrderById/${id}`, 
      {
        id_Pedido: id,
        ds_pedido: name,
        dt_pedido: dtPedido,
        vl_pedido: vlPedido,
      }
    );
    return response;
  }

  async deleteOrder(id: string) {
    const response = await this.httpClient.delete<Output>(
      `localhost:8080/pedido/deleteOrder/${id}`, 
      {

      }
    );
    return response;
  }
}

type Output = [
  {
    id_Pedido: number;
    ds_pedido: string;
    dt_pedido: string;
    vl_pedido: string;
  }
]