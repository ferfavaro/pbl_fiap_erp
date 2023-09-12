import SupplierGateway from "@/app/infra/gateways/SupplierGateway";

export default class AddSupplier {
  constructor(readonly supplierGateway: SupplierGateway){}

  async execute (id: string, name: string, dtPedido: number, vlPedido: string) {
    const suppliers = await this.supplierGateway.createSupplier(id, name, dtPedido, vlPedido);
    return suppliers;
  }
}