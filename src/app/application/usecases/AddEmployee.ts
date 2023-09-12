import EmployeeGateway from "@/app/infra/gateways/EmployeeGateway";

export default class AddEmployee {
  constructor(readonly employeeGateway: EmployeeGateway){}

  async execute (id: string, name: string, dtAdmissao: number, vlSalario: string, dsFuncao: string) {
    const employees = await this.employeeGateway.createEmployee(id, name, dtAdmissao, vlSalario, dsFuncao);
    return employees;
  }
}