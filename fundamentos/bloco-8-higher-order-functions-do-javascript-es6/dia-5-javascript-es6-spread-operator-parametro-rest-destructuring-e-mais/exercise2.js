// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

// parametro rest

const sum = (...numeros) => numeros.reduce(((acc, val) => acc + val), 0)

console.log(sum(1,2,3,4,5))