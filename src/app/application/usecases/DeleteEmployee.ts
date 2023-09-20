import EmployeeGateway from "@/app/infra/gateways/EmployeeGateway";

export default class DeleteEmployee {
  constructor(readonly employeeGateway: EmployeeGateway){}

  async execute (id: number) {
    const employees = await this.employeeGateway.deleteEmployee(id);
    return employees;
  }
}