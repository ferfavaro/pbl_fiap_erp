import ClientGateway from "@/app/infra/gateways/ClientGateway";

export default class GetAllClients {
  constructor(readonly clientGateway: ClientGateway){}

  async execute () {
    const clients = await this.clientGateway.getAllClients();
    return clients;
  }
}