"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("./client"));
const pedido_1 = __importDefault(require("./pedido"));
const pedidoItem_1 = __importDefault(require("./pedidoItem"));
const client = new client_1.default('João');
const sandwich = new pedidoItem_1.default('Sanduiche Natural', 5.00);
const juice = new pedidoItem_1.default('Suco de Abacaxi', 5.00);
const dessert = new pedidoItem_1.default('Gelatina de Uva', 2.50);
const pedido = new pedido_1.default(client, [sandwich, juice, dessert], 'dinheiro', 0.10);
console.log(pedido);
