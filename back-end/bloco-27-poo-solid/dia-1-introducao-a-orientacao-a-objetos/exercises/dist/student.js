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
    get avgNota() {
        const soma = this.sumNota;
        const total = this._notas.length + this._trabalhos.length;
        return soma / total;
    }
}
const newStudent = new Students(10, 'Wanny', [5, 6, 8, 10], [2, 5]);
console.log(newStudent.sumNota);
console.log(newStudent.avgNota);
