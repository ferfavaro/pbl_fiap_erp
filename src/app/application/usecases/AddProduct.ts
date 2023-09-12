import ProductGateway from "@/app/infra/gateways/ProductGateway";

export default class AddProduct {
  constructor(readonly productGateway: ProductGateway){}

  async execute (productName: string, productPrice: string, productQuantity: number) {
    const products = await this.productGateway.createProduct(productName, productPrice, productQuantity);
    return products;
  }
}