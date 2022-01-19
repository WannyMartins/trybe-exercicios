const newEmployees = (contratados) => {
    const employees = {
      id1: contratados('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: contratados('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: contratados('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  
  };
const contratados = (nomeCompleto) => {
    const email = nomeCompleto.toLowerCase().split(' ').join('_');
       return {nomeCompleto, email: `${email}@trybe.com`};
    }
    
////console.log(newEmployees(contratados));

const checar = (myNum, numeroSorteado) => myNum === numeroSorteado;


const sorteio = (myNum, callback) => {
    const numeroSorteado = Math.floor(Math.random()*5);
   return callback(myNum, numeroSorteado) ? `Numero Sorteado foi: ${numeroSorteado}. Parabéns você ganhou!` : `Numero Sorteado foi: ${numeroSorteado}. Tente novamente`;
   
}

//console.log(sorteio(2, checar));

 const gabaritos = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostasRecebida = ['A', 'C', 'N.A', 'D', 'N.A', 'A', 'N.A', 'A', 'D', 'B']
let resultado = 0;
  
const corrigeProvas = (gabarito, respostasRecebidas, callback) => {
  let contador = 0;
  for(let index = 0; index < gabarito.length; index += 1){
    const result = callback(gabarito[index], respostasRecebidas[index]);
    contador += result;
  }
  return `Resultado Final: ${contador} pontos.`;
}

const checarProvas = (gabarito, respostasRecebidas) => {
  if (gabarito === respostasRecebidas){
      return 1;
    }if (respostasRecebidas === 'N.A'){
      return 0;
    }
  return -0,5;
};
console.log(corrigeProvas(gabaritos, respostasRecebida, checarProvas))
