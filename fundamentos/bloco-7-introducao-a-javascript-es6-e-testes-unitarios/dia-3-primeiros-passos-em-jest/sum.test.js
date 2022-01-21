const sum = require('./sum');


describe('Requisitos da função sum', () => {
    it('Retornar 9 se parametros for 4 e 5', () => {
        expect(sum(4, 5)).toBe(9);
    });

    it('Retornar 0 se parametros for 0 e 0', () => {
        expect(sum(0, 0)).toBe(0);
    });

    it('Retornar erro se parametros for 4 e "5"', () => {
        expect(() => {sum(4, '5')}).toThrow();
    });


    it('Retornar mensgem de erro "parameters must be numbers"se parametros for 4 e "5"', () => {
        expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
    });

})


