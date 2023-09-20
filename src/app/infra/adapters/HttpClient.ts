export default interface HttpClient {
  get<T>(url: string): Promise<T>;
  post<T>(url: string, data: any): Promise<T>;
  update<T>(url: string, data: any): Promise<T>;
  delete<T>(url: string, data: any): Promise<T>;
  setAuthToken(token: string): void;
}
