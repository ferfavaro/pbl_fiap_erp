import ProductGateway from "@/app/infra/gateways/ProductGateway";

export default class DeleteProduct {
  constructor(readonly productGateway: ProductGateway){}

  async execute (id: string) {
    const products = await this.productGateway.deleteProduct(id);
    return products;
  }
}