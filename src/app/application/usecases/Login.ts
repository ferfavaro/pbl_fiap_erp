import UserGateway from "@/app/infra/gateways/UserGateway";

export default class Login {
  constructor(readonly userGateway: UserGateway){}

  async execute (email: string, password: string) {
    const user = await this.userGateway.login(email, password);
    this.userGateway.setAuthToken(user.token);
    return user;
  }
}