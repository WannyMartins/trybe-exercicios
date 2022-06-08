
// Crie uma função que receba três parâmetros e retorna uma Promise.
// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números".
// Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ((a + b) * c).
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.
function randon(){
 return Math.floor(Math.random() * 100 + 1)
}
function funcaoPromisses(param1 , param2, param3){
  return new Promise((resolve, reject) => {
    if (typeof param1 !== 'number' || typeof param2 !== 'number' || typeof param3 !== 'number'){
      return reject(new Error("calculo 1: Informe apenas números"))
    }
    const calculo = (param1 + param2) * param3;
    const result = `calculo 1 ${calculo}`
 
   if (calculo < 50){
     return reject(new Error("calculo 1: Valor muito baixo"))
   }


   resolve(result);
  })

}

// funcaoPromisses();
funcaoPromisses(10, 10, 10)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message));

funcaoPromisses(1, 1, 'a')
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message));

funcaoPromisses(1, 1, 1)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message));

  // Escreva um código para consumir a função construída no exercício anterior.
  // Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1).
  // Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
  // Utilize then e catch para manipular a Promise retornada pela função:
  // Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
  // Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.
  


  function randon(){
    return Math.floor(Math.random() * 100 + 1)
   }
   function funcaoPromisses2(){
    const param1= randon();
    const param2= randon();
    const param3= randon();
     return new Promise((resolve, reject) => {
       if (typeof param1 !== 'number' || typeof param2 !== 'number' || typeof param3 !== 'number'){
         return reject(new Error("calculo 2: Informe apenas números"))
       }
       const calculo = (param1 + param2) * param3;
      const result = `calculo 2 ${calculo}`
      
      if (result < 50){
        return reject(new Error("calculo 2: Valor muito baixo"))
      }
   
      if (result > 2000){
       return reject(new Error("calculo 2: Valor muito alto"))
     }
   
      resolve(result);
     })
   
   }
   
   // funcaoPromisses();
   funcaoPromisses2()
     .then((resolve) => console.log(resolve))
     .catch((error) => console.log(error.message));

//      Reescreva o código do exercício anterior para que utilize async/await.
// Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async.
function randon(){
  return Math.floor(Math.random() * 100 + 1)
 }
 async function funcaoPromisses3(){
  const param1=  randon();
  const param2= randon();
  const param3=  randon();
     if (typeof param1 !== 'number' || typeof param2 !== 'number' || typeof param3 !== 'number'){
       return  console.error(Error("calculo 3: Informe apenas números"))
     }
     const calculo = (param1 + param2) * param3;
     const result = `calculo 3 ${calculo}`
   
    if (calculo < 50){
      return console.error(Error("calculo 3: Valor muito baixo"))
    }
 
    if (calculo > 2000){
     return console.error(Error("calculo 3: Valor muito alto"))
   }
 
    console.log(result);
   }
 
 
 
 // funcaoPromisses();
 funcaoPromisses3();
