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

  async createSupplier(nm_email: string, nm_fornecedor: string) {
    const response = await this.httpClient.post<Output>(
      `http://localhost:8080/dealer/postFornecedor`, 
      {
        nm_email: nm_email,
        nm_fornecedor: nm_fornecedor,
      }
    );
    return response;
  }

  async editSupplier(id: number, nm_email: string, nm_fornecedor: string) {
    const response = await this.httpClient.update<Output>(
      `http://localhost:8080/dealer/updateFornecedor/${id}`, 
      {
        id_fornecedor: id,
        nm_email: nm_email,
        nm_fornecedor: nm_fornecedor,
      }
    );
    return response;
  }

  async deleteSupplier(id: number) {
    const response = await this.httpClient.delete<Output>(
      `http://localhost:8080/dealer/deleteDealer/${id}`, 
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