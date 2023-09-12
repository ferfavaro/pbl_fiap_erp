import ClientGateway from "@/app/infra/gateways/ClientGateway";

export default class EditClient {
  constructor(readonly clientGateway: ClientGateway){}

  async execute (id: string, clientName: string) {
    const clients = await this.clientGateway.editClient(id, clientName);
    return clients;
  }
}