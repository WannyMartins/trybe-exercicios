"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pedido {
    constructor(client, items, pay, desc) {
        this._items = [];
        this._descont = 0;
        this._client = client;
        this.items = items;
        this._payment = pay;
        this.descont = desc;
    }
    get client() {
        return this._client;
    }
    set client(value) {
        this._client = value;
    }
    get items() {
        return this._items;
    }
    set items(value) {
        if (value.length === 0) {
            throw new Error('O pedido tem que ter pelo menos 1 item');
        }
        this._items = value;
    }
    get payment() {
        return this._payment;
    }
    set payment(value) {
        this._payment = value;
    }
    get descont() {
        return this._descont;
    }
    set descont(value) {
        if (value < 0) {
            throw new Error('O desconto não pode ser um valor negativo');
        }
        this._descont = value;
    }
}
exports.default = Pedido;
