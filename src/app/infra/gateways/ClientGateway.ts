import HttpClient from "../adapters/HttpClient";
import Cliente from "@/app/domain/entities/Cliente";

export default class ClientGateway {
  constructor(readonly httpClient: HttpClient) {}

  async getAllClients() {
    const response = await this.httpClient.get<Output>(
      "http://localhost:8080/cliente/getAllClients"
    );

    const result: Cliente[] = [];
    for (const clientResponse of response) {
      const clientEntity = new Cliente(
        clientResponse.id_cliente,
        clientResponse.nm_cliente,
      )
      result.push(clientEntity);
    }
    return result;
  }

  async createClient(clientName: string) {
    const response = await this.httpClient.post<Output>(
      `localhost:8080/cliente/addUser/client`, 
      {
        nm_cliente: clientName,
      }
    );
    return response;
  }

  async deleteClient(clientId: string) {
    const response = await this.httpClient.delete<Output>(
      `localhost:8080/client/deleteClient/${clientId}`, 
      {

      }
    );
    return response;
  }
}

type Output = [
  {
    id_cliente: number;
    nm_cliente: string;
  }
]