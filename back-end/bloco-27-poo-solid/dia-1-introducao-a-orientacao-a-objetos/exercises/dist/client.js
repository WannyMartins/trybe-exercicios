"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Client {
    constructor(nome) {
        this._nome = nome;
    }
    get nome() {
        return this._nome;
    }
    set name(value) {
        if (value.length < 3) {
            throw new Error('O nome deve conter no mínimo 3 caracteres');
        }
        this._nome = value;
    }
}
exports.default = Client;
