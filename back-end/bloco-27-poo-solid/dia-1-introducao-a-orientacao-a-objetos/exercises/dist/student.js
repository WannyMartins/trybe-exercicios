"use strict";
class Students {
    constructor(matricula, nome, notas, trabalhos) {
        this._matricula = matricula;
        this._nome = nome;
        this._notas = notas;
        this._trabalhos = trabalhos;
    }
    get matricula() {
        return this._matricula;
    }
    get nome() {
        return this._nome;
    }
    get notas() {
        return this._notas;
    }
    get trabalhos() {
        return this._trabalhos;
    }
    get sumNota() {
        const notasprovas = this._notas.reduce((nota, accNotas) => nota + accNotas);
        const notasTrabalhos = this._trabalhos.reduce((nota, accNotas) => nota + accNotas);
        return notasprovas + notasTrabalhos;
    }
}
