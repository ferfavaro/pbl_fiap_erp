export default class Produto {
  constructor(
    readonly id?: number,
    readonly name?: string,
    readonly price?: string,
    readonly quantity?: number,
  ) {}
}