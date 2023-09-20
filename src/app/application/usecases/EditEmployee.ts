import EmployeeGateway from "@/app/infra/gateways/EmployeeGateway";

export default class EditEmployee {
  constructor(readonly employeeGateway: EmployeeGateway){}

  async execute (id: number, name: string, dtAdmissao: string, vlSalario: string, dsFuncao: string) {
    const employees = await this.employeeGateway.editEmployee(id, name, dtAdmissao, vlSalario, dsFuncao);
    return employees;
  }
}