import User from "@/app/domain/entities/User";
import HttpClient from "../adapters/HttpClient";

export default class ProductGateway {
  constructor(readonly httpClient: HttpClient) {}

  async signIn(email: string, password: string) {
    const response = await this.httpClient.post<Output>(
      `http://localhost:8080/auth/register`, 
      {
        login: email,
        ds_password: password,
        ds_role: "ADMIN"
      }
    );
    return response;
  }

  async login(email: string, password: string) {
    const response = await this.httpClient.post<Output>(
      `http://localhost:8080/auth/login`, 
      {
        login: email,
        ds_password: password,
      }
    );
    const result = new User(response.token)
    return result;
  }

  setAuthToken(token: string) {
    this.httpClient.setAuthToken(token);
  }
}

type Output = 
  {
    token: string;
  }