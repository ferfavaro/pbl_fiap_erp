import Produto from "@/app/domain/entities/Produto";
import HttpClient from "../adapters/HttpClient";

export default class ProductGateway {
  constructor(readonly httpClient: HttpClient) {}

  async getAllProducts() {
    const response = await this.httpClient.get<Output>(
      "http://localhost:8080/produto/getAllProducts"
    );

    const result: Produto[] = [];
    for (const productResponse of response) {
      const productEntity = new Produto(
        productResponse.id_produto,
        productResponse.nm_produto,
        productResponse.vl_produto,
        productResponse.qt_produto,
      )
      result.push(productEntity);
    }
    return result;
  }

  async createProduct(productName: string, productPrice: string, productQuantity: number) {
    const response = await this.httpClient.post<Output>(
      `localhost:8080/produto/addProduct/product`, 
      {
        nm_produto: productName,
        vl_produto: productPrice,
        qt_produto: productQuantity
      }
    );
    return response;
  }

  async editProduct(id: string, productName: string, productPrice: string, productQuantity: number) {
    const response = await this.httpClient.update<Output>(
      `localhost:8080/produto/updateProduct/${id}`, 
      {
        nm_produto: productName,
        vl_produto: productPrice,
        qt_produto: productQuantity
      }
    );
    return response;
  }

  async deleteProduct(productId: string) {
    const response = await this.httpClient.delete<Output>(
      `localhost:8080/produto/deleteProduct/${productId}`, 
      {

      }
    );
    return response;
  }
}

type Output = [
  {
    id_produto: number;
    nm_produto: string;
    vl_produto: string;
    qt_produto: number;
  }
]