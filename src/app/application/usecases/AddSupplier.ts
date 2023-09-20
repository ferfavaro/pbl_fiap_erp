import SupplierGateway from "@/app/infra/gateways/SupplierGateway";

export default class AddSupplier {
  constructor(readonly supplierGateway: SupplierGateway){}

  async execute (nm_email: string, nm_fornecedor: string) {
    const suppliers = await this.supplierGateway.createSupplier(nm_email, nm_fornecedor);
    return suppliers;
  }
}