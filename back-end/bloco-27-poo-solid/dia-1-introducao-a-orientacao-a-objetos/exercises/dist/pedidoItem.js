"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PedidoItem {
    constructor(nome, price) {
        this._nome = nome;
        this._price = price;
    }
    get nome() {
        return this._nome;
    }
    get price() {
        return this._price;
    }
    set name(value) {
        if (value.length < 3) {
            throw new Error('O nome deve conter no mínimo 3 caracteres');
        }
        this._nome = value;
    }
    set price(value) {
        if (value < 0) {
            throw new Error('O preço não pode ser menor que 0');
        }
        this._price = value;
    }
}
exports.default = PedidoItem;
