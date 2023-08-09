import ProductGateway from "@/app/infra/gateways/ProductGateway";

export default class GetAllProducts {
  constructor(readonly productGateway: ProductGateway){}

  async execute () {
    const products = await this.productGateway.getAllProducts();
    return products;
  }
}