import UserGateway from "@/app/infra/gateways/UserGateway";

export default class SignIn {
  constructor(readonly userGateway: UserGateway){}

  async execute (email: string, password: string) {
    const products = await this.userGateway.signIn(email, password);
    return products;
  }
}