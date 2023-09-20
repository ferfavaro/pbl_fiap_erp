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
        orderResponse.T_cliente_id_cliente.id_cliente
      )
      result.push(orderEntity);
    }
    return result;
  }

  async createOrder(name: string, dtPedido: string, vlPedido: string, idCliente: number) {
    const response = await this.httpClient.post<Output>(
      `http://localhost:8080/pedido/addPedido/Pedido`, 
      {
        ds_pedido: name,
        dt_pedido: dtPedido,
        vl_pedido: vlPedido,
        T_cliente_id_cliente: {
          id_cliente: idCliente
        },
      }
    );
    return response;
  }

  async editOrder(id: number, name: string, dtPedido: string, vlPedido: string, idCliente: number) {
    const response = await this.httpClient.update<Output>(
      `http://localhost:8080/pedido/updateOrderById/${id}`, 
      {
        id_Pedido: id,
        ds_pedido: name,
        dt_pedido: dtPedido,
        vl_pedido: vlPedido,
        T_cliente_id_cliente: {
          id_cliente: idCliente
        }
      }
    );
    return response;
  }

  async deleteOrder(id: number) {
    const response = await this.httpClient.delete<Output>(
      `http://localhost:8080/pedido/deleteOrder/${id}`, 
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
    T_cliente_id_cliente: {
      id_cliente: number
    }
  }
]