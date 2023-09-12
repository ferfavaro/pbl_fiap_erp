import EmployeeGateway from "@/app/infra/gateways/EmployeeGateway";

export default class GetAllEmployees {
  constructor(readonly employeeGateway: EmployeeGateway){}

  async execute () {
    const employees = await this.employeeGateway.getAllEmployees();
    return employees;
  }
}