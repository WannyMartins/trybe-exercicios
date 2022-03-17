const gerarNumerosAleatorios = () => {
  const numeroAlatorio = Math.floor( Math.random() * 100 )
  return numeroAlatorio
}

console.log(gerarNumerosAleatorios())

const divisao = (a, b) => {
  const numero1 = gerarNumerosAleatorios();
  const numero2 = gerarNumerosAleatorios();
  console.log("numero1 "+numero1)
  console.log("numero2 "+numero2)

  return Math.floor(numero1/numero2);
}

console.log('====================================');
console.log(divisao());
console.log('====================================');

module.exports = { gerarNumerosAleatorios, divisao }

