import EmployeeGateway from "@/app/infra/gateways/EmployeeGateway";

export default class AddEmployee {
  constructor(readonly employeeGateway: EmployeeGateway){}

  async execute (name: string, dtAdmissao: string, vlSalario: string, dsFuncao: string) {
    const employees = await this.employeeGateway.createEmployee(name, dtAdmissao, vlSalario, dsFuncao);
    return employees;
  }
}