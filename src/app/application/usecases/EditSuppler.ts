import SupplierGateway from "@/app/infra/gateways/SupplierGateway";

export default class EditSupplier {
  constructor(readonly supplierGateway: SupplierGateway){}

  async execute (id: number, nm_email: string, nm_fornecedor: string) {
    const suppliers = await this.supplierGateway.editSupplier(id, nm_email, nm_fornecedor);
    return suppliers;
  }
}