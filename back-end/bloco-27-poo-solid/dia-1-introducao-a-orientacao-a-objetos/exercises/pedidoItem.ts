export default class PedidoItem {
  private _nome: string;
  private _price: number;

   constructor(nome: string, price: number){
    this._nome = nome;
    this._price = price;
   }

   get nome(){
    return this._nome
   }

   get price(){
    return this._price
   }

   set name(value: string){
    if (value.length < 3) {

     throw new Error('O nome deve conter no mínimo 3 caracteres');
    }
     this._nome=value;
   }

   set price(value: number){
    if(value < 0) {
      throw new Error('O preço não pode ser menor que 0');
    }
    this._price = value;
   }

}
