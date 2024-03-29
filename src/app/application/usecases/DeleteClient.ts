import ClientGateway from "@/app/infra/gateways/ClientGateway";

export default class DeleteClient {
  constructor(readonly clientGateway: ClientGateway){}

  async execute (id: number) {
    const clients = await this.clientGateway.deleteClient(id);
    return clients;
  }
}