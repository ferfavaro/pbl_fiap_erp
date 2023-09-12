import UserGateway from "@/app/infra/gateways/UserGateway";

export default class Login {
  constructor(readonly userGateway: UserGateway){}

  async execute (email: string, password: string) {
    const products = await this.userGateway.login(email, password);
    return products;
  }
}