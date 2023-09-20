import ProductGateway from "@/app/infra/gateways/ProductGateway";

export default class EditProduct {
  constructor(readonly productGateway: ProductGateway){}

  async execute (id: number, productName: string, productPrice: string, productQuantity: number) {
    const products = await this.productGateway.editProduct(id, productName, productPrice, productQuantity);
    return products;
  }
}