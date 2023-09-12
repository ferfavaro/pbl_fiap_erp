import SupplierGateway from "@/app/infra/gateways/SupplierGateway";

export default class DeleteSupplier {
  constructor(readonly supplierGateway: SupplierGateway){}

  async execute (id: string) {
    const suppliers = await this.supplierGateway.deleteSupplier(id);
    return suppliers;
  }
}