import Funcionario from "@/app/domain/entities/Funcionario";
import HttpClient from "../adapters/HttpClient";

export default class EmployeeGateway {
  constructor(readonly httpClient: HttpClient) {}

  async getAllEmployees() {
    const response = await this.httpClient.get<Output>(
      "http://localhost:8080/funcionario/getAllFuncionarios"
    );

    const result: Funcionario[] = [];
    for (const employeeResponse of response) {
      const employeeEntity = new Funcionario(
        employeeResponse.id_funcionario,
        employeeResponse.nm_nome,
        employeeResponse.dt_admissao,
        employeeResponse.vl_salario,
        employeeResponse.ds_funcao,
      )
      result.push(employeeEntity);
    }
    return result;
  }

  async createEmployee(id: string, name: string, dtAdmissao: number, vlSalario: string, dsFuncao: string) {
    const response = await this.httpClient.post<Output>(
      `localhost:8080/funcionario/addFuncionario`, 
      {
        id_funcionario: id,
        nm_nome: name,
        dt_admissao: dtAdmissao,
        vl_salario: vlSalario,
        ds_funcao: dsFuncao,
      }
    );
    return response;
  }

  async editEmployee(id: string, name: string, dtAdmissao: number, vlSalario: string, dsFuncao: string) {
    const response = await this.httpClient.update<Output>(
      `localhost:8080/funcionario/updateFuncionario/${id}`, 
      {
        id_funcionario: id,
        nm_nome: name,
        dt_admissao: dtAdmissao,
        vl_salario: vlSalario,
        ds_funcao: dsFuncao,
      }
    );
    return response;
  }

  async deleteEmployee(id: string) {
    const response = await this.httpClient.delete<Output>(
      `localhost:8080/funcionario/deleteFuncionarioByid/${id}`, 
      {

      }
    );
    return response;
  }
}

type Output = [
  {
    id_funcionario: number;
    nm_nome: string;
    dt_admissao: string;
    vl_salario: string;
    ds_funcao: string;
  }
]