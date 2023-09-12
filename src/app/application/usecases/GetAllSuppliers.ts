import SupplierGateway from "@/app/infra/gateways/SupplierGateway";

export default class GetAllSuppliers {
  constructor(readonly supplierGateway: SupplierGateway){}

  async execute () {
    const suppliers = await this.supplierGateway.getAllSuppliers();
    return suppliers;
  }
}