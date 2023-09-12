import Fornecedor from "@/app/domain/entities/Fornecedor";
import HttpClient from "../adapters/HttpClient";

export default class SupplierGateway {
  constructor(readonly httpClient: HttpClient) {}

  async getAllSuppliers() {
    const response = await this.httpClient.get<Output>(
      "http://localhost:8080/dealer/getAllFornecedor"
    );

    const result: Fornecedor[] = [];
    for (const supplierResponse of response) {
      const supplierEntity = new Fornecedor(
        supplierResponse.id_fornecedor,
        supplierResponse.nm_fornecedor,
        supplierResponse.nm_email,
      )
      result.push(supplierEntity);
    }
    return result;
  }

  async createSupplier(id: string, name: string, dtPedido: number, vlPedido: string) {
    const response = await this.httpClient.post<Output>(
      `localhost:8080/dealer/postFornecedor`, 
      {
        id_Pedido: id,
        ds_pedido: name,
        dt_pedido: dtPedido,
        vl_pedido: vlPedido,
      }
    );
    return response;
  }

  async editSupplier(id: string, name: string, dtPedido: number, vlPedido: string) {
    const response = await this.httpClient.update<Output>(
      `localhost:8080/dealer/updateFornecedor/${id}`, 
      {
        id_Pedido: id,
        ds_pedido: name,
        dt_pedido: dtPedido,
        vl_pedido: vlPedido,
      }
    );
    return response;
  }

  async deleteSupplier(id: string) {
    const response = await this.httpClient.delete<Output>(
      `localhost:8080/dealer/deleteSupplier/${id}`, 
      {

      }
    );
    return response;
  }
}

type Output = [
  {
    id_fornecedor: number;
    nm_fornecedor: string;
    nm_email: string;
  }
]