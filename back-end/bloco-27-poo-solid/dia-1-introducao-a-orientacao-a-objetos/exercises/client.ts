export default class Client {
  private _nome: string;
   constructor(nome: string){
    this._nome = nome;
   }

   get nome(){
    return this._nome
   }

   set name(value: string){
    if (value.length < 3) {

     throw new Error('O nome deve conter no mínimo 3 caracteres');
    }
     this._nome=value;
   }
}
