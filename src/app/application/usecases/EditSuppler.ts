import SupplierGateway from "@/app/infra/gateways/SupplierGateway";

export default class EditSupplier {
  constructor(readonly supplierGateway: SupplierGateway){}

  async execute (id: string, name: string, dtPedido: number, vlPedido: string) {
    const suppliers = await this.supplierGateway.editSupplier(id, name, dtPedido, vlPedido);
    return suppliers;
  }
}