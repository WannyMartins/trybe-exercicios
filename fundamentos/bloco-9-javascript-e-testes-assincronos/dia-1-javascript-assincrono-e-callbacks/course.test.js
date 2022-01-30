// test('Não deveria passar!', () => {
//     setTimeout(() => {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!');
//     }, 500);
//   });

const { expect } = require("@jest/globals");

// test('Não deveria passar! 2', (done) => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!2');
//     done();
//   }, 500);
// });

// test('Não deveria passar! 2', (done) => {
//   setTimeout(() => {
//     try{
//     expect(10).toBe(5);
//     console.log('Deveria falhar!2');
//     }catch(error) {
//       done();
//     }
//   }, 500);
// });


// test('Não deveria passar! 2', (done) => {
//   setTimeout(() => {
//     try{
//     expect(10).toBe(5);
//     console.log('Deveria falhar!2');
//     }catch(error) {
//       done(error);
//     }
//   }, 500);
// });

// const asyncSum = (a, b, callback) => {
//   setTimeout(() => {
//     const result = a + b;
//     callback(result);
//   }, 500);
// };

// test('Testando asyncSum, soma 5 mais 10', (done) => {
//   asyncSum(5, 10, (result) => {
//     try {
//       expect(result).toBe(15);
//       done();
//     } catch (error) {
//       done(error);
//     }
//   });
// });

// cicles.test.js

// let cities = [];

// const addCity = (city) => {
//   cities.push(city);
// };

// const removeCity = (city) => {
//   cities = cities.filter((eachCity) => eachCity !== city);
// };

// describe('Agrupa testes do primeiro bloco', () => {



//   test('Testa a função addCity', () => {
//     expect.assertions(4);
//     addCity('Campinas');
//     addCity('Goiania');
//     addCity('Recife');
//     expect(cities).toHaveLength(3);
//     expect(cities).toContain('Campinas');
//     expect(cities).toContain('Goiania');
//     expect(cities).toContain('Recife');
//   });


//   test('Testa a função removeCity', () => {
//     expect.assertions(4);
//     removeCity('Campinas');
//     expect(cities).toHaveLength(2);
//     expect(cities).not.toContain('Campinas');
//     expect(cities).toContain('Goiania');
//     expect(cities).toContain('Recife');
//   });
// })

// describe('Agrupa testes do segundo bloco', () => {


//   beforeEach(() => {
//     cities = ['Pindamonhangaba'];
//   });

//   afterEach(() => {
//     cities = [];
//   });



//   test('Testa a função addCity utilizando o beforeEach', () => {
//     expect.assertions(3);
//     addCity('Piraporinha');
//     expect(cities).toHaveLength(2);
//     expect(cities).toContain('Pindamonhangaba');
//     expect(cities).toContain('Piraporinha');
//   });

//   test('Testa a função removeCity utilizando o beforeEach', () => {
//     expect.assertions(2);
//     removeCity('Pindamonhangaba');
//     expect(cities).not.toContain('Pindamonhangaba');
//     expect(cities).toHaveLength(0);
//   });

// })
