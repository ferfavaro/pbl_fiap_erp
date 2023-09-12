import axios from "axios";
import HttpClient from "./HttpClient";

export default class AxiosAdapter implements HttpClient {
  constructor() {
    axios.defaults.validateStatus = () => {
      return true;
    };
  }

  private headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  };

  async get(url: string): Promise<any> {
    console.log(url);
    const response = await axios.get(url);
    if (response.status >= 400) {
      return Promise.reject(
      );
    }
    return response.data;
  }

  async post(url: string, data: any): Promise<any> {
    console.log(url);
    const response = await axios.post(url, data, {headers: this.headers});
    if (response.status >= 400) {
      return Promise.reject(
      );
    }
    return response.data;
  }

  async update(url: string, data: any): Promise<any> {
    const response = await axios.put(url, data);
    if (response.status >= 400) {
      return Promise.reject(
      );
    }
    return response.data;
  }

  async delete(url: string, data: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
