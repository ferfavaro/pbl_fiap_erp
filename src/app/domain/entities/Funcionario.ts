export default class Funcionario {
  constructor(
    readonly id?: number,
    readonly nm_nome?: string,
    readonly dt_admissao?: string,
    readonly vl_salario?: string,
    readonly ds_funcao?: string,
  ) {}
}