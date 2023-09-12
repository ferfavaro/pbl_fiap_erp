import UserGateway from "@/app/infra/gateways/UserGateway";

export default class SignIn {
  constructor(readonly userGateway: UserGateway){}

  async execute (email: string, password: string) {
    console.log("entrou")
    const products = await this.userGateway.signIn(email, password);
    return products;
  }
}