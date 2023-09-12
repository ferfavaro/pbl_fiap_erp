export default class Pedido {
  constructor(
    readonly id?: number,
    readonly ds_pedido?: string,
    readonly dt_pedido?: string,
    readonly vl_pedido?: string,
  ) {}
}