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
    
console.log(newEmployees(contratados));

const checar = (myNum, numeroSorteado) => myNum === numeroSorteado;


const sorteio = (myNum, callback) => {
    const numeroSorteado = Math.floor(Math.random()*5);
   return callback(myNum, numeroSorteado) ? "Parabéns você ganhou" : "Tente novamente";
   
}

console.log(sorteio(2, checar));
  
