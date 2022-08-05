import Client from "./client";
import PedidoItem from "./pedidoItem";

export default class Pedido {
  private _client: Client;
  private _items: PedidoItem[] = [];
  private _payment: string;
  private _descont = 0;

   constructor(client: Client, items: PedidoItem[], pay: string, desc: number){
    this._client = client;
    this.items = items;
    this._payment = pay;
    this.descont = desc;

   }

   get client(): Client{
    return this._client
   }

   set client(value: Client){
    this._client = value;
   }

   get items(): PedidoItem[]{
    return this._items
   }

   set items(value: PedidoItem[]){
    if(value.length === 0){
      throw new Error('O pedido tem que ter pelo menos 1 item');
    }
    this._items = value;
   }

   get payment(): string{
    return this._payment
   }

   set payment(value: string) {

    this._payment = value
   }

   get descont(): number{
    return this._descont
   }

   set descont(value: number) {
    if( value < 0 ){
      throw new Error('O desconto não pode ser um valor negativo');
    }
    this._descont = value;
   }

   calculateTotal(): number{
    return this.items
    .reduce((acc, item) => {
      const total = acc + item.price;
      return total;
    }, 0);
   }

   calculateWithDiscount(): number {
    return this.calculateTotal()*(1-this._descont)
   }


}
