const { expect } = require("chai");
const fs = require('fs');
const sinon = require('sinon');

const numeroNatural = require('../numeroNatural.js');
const writeFile = require('../writeFile.js');

describe('verificar número se é positivo ou negativo ou neutro', () =>{
    describe('verificar número maior que zero', () =>{
      describe('a resposta', () =>{
      it('4 é positivo ?', () => {
        expect(numeroNatural(4)).to.be.equals('positivo')
      })
    })
  })
    
    describe('verificar número menor que zero', () =>{
      describe('a resposta', () =>{
      it('-5 é negativo?', () => {
        expect(numeroNatural(-5)).to.be.equals('negativo')
      })
    })
  })

    describe('verificar zero', () =>{
      describe('a resposta', () =>{
      it('0 é neutro?', () => {
        expect(numeroNatural(0)).to.be.equals('neutro')
      })
    })
  })

})

describe('verificar se o valor passado é um número', () =>{
      describe('a resposta', () =>{
      it('"a" é string ?', () => {
        expect(numeroNatural('a')).to.be.a('string')
    })
  })
    describe('verificar se retorna o erro quando o valor não for númeror passado é um número', () =>{
      describe('a resposta', () =>{
      it('"a" retorna o erro ?', () => {
        expect(numeroNatural('a')).to.be.equals("o valor deve ser um número")
      })
    })
  })
})
  

describe('verificar se a função "writeFile" escreve no arquivo o texto desejado', () =>{

  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });
  
  describe('verifica se escreve corretamente', () =>{
    describe('recebe os paramentros e escreve', () =>{
      const arquivo = 'arquivo.txt';
      const conteudo = 'VQV testes com mocha, chai e sinon';
      const resposta = writeFile(arquivo, conteudo)
      it('o arquivo é uma string?', () => {
      expect(resposta).to.be.a('string')
    })
  })
    describe('recebe o ok após terminar de escrever o arquivo?', () =>{
      const arquivo = 'arquivo.txt';
      const conteudo = 'VQV testes com mocha, chai e sinon';
      const resposta = writeFile(arquivo, conteudo)
        it('a resposta', () => {
        expect(resposta).to.be.equals('ok')
      })
    })

  })
})

