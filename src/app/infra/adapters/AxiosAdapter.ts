import axios from "axios";
import HttpClient from "./HttpClient";

export default class AxiosAdapter implements HttpClient {
  constructor() {
    axios.defaults.validateStatus = () => {
      return true;
    };
  }

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
    const response = await axios.post(url, data);
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
    const response = await axios.delete(url, data);
    if (response.status >= 400) {
      return Promise.reject(
      );
    }
    return response.data;
  }

  setAuthToken(token: string): void {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
}
