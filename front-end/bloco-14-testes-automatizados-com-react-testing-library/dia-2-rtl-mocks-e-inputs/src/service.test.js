const service = require('./service');

test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
 service.gerarNumerosAleatorios = jest.fn().mockReturnValue(10);

 expect(service.gerarNumerosAleatorios()).toBe(10);
 expect(service.gerarNumerosAleatorios).toHaveBeenCalled();
 expect(service.gerarNumerosAleatorios).toHaveBeenCalledTimes(1);
});

test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
service.divisao = jest.fn().mockImplementation((a, b) => a / b);

expect(service.divisao(10, 2)).toBe(5);
expect(service.divisao).toHaveBeenCalled();
expect(service.divisao).toHaveBeenCalledTimes(1);
expect(service.divisao).toBeCalledWith(10, 2);
});