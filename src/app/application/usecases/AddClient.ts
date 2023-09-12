import ClientGateway from "@/app/infra/gateways/ClientGateway";

export default class AddClient {
  constructor(readonly clientGateway: ClientGateway){}

  async execute (clientName: string) {
    const clients = await this.clientGateway.createClient(clientName);
    return clients;
  }
}