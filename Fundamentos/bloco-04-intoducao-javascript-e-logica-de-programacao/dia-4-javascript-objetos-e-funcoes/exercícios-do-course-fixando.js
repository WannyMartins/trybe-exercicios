//////////////OBJETO /////////////


let player={
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {golden: 2, silver:3},
  
}
player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 
    2018];

console.log(player)

console.log("A jogadora " + player.name + " " + player.lastName +" tem " + player.age +" anos de idade");

console.log("A jogadora "+player.name+" "+ player.lastName+' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + " vezes");

console.log("A jogadora "+player.name+" "+ player.
lastName+' possui ' + player.medals.golden+ " medalhas de ouro e "+ player.medals.silver+ " medalhas de prata");

////////////// FIXANDO FOR/IN E FOR/OF///////////

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

  for (const key in names) {

    console.log("olá "+ names[key]);
  };

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for(let key in car) {

    console.log(key, car[key]);
  }

////////FIXANDO FUNÇOES/////////////////



function adicao(a,b){
    let soma= a+b
console.log('a soma é '+soma)
}

adicao(1,2)
////////////////////////////////
function sub(a,b){
    let subt= a-b
console.log('a subtração é '+subt)
}

sub(8,3)
///////////////////////////
function multiplicacao(a,b){
    let mult= a*b
console.log('a multiplicação é '+mult)
}

multiplicacao(10,3)
////////////////////////////

function divisao(a,b){
    let div= a/b
console.log('a divisão é '+div)
}

divisao(94,5)

////////////////////////////

function modulo(a,b){
    let mod= a%b
console.log('o resto da divisão de '+ a + ' e '+ b +' é '+mod)
}

modulo(10,4)

////PROGRAMA QUE RETORNE O MAIOR ENTRE 2 NUMEROS///////

function maiorNumero(num1, num2){

    if(num1>num2){
        console.log(num1 +' é maior que ' +num2)
    } else if(num1<num2){
        console.log(num2 +' é maior que '+num1)
    } else{
        console.log('Os numeros são iguais');
    }
}

maiorNumero(10,1)

//////////MAIOR DE 3 NUMEROS//////

function maiorDeTres(num1, num2, num3){

    if(num1>num2 && num1>num3){
        console.log(num1 +' é maior que ' +num2 +' e '+ num3)
    } else if(num1<num2 && num3 < num2){
        console.log(num2 +' é maior que '+num1 +' e '+ num3)
    }else if(num3>num2 && num3 > num1){
        console.log(num3 +' é maior que '+num1 +' e '+ 
      num2)

    } else{
        console.log('há numeros iguais');
    }
}

maiorDeTres(4,4,2)

//////RETORNE POSITIVO OU NEGATIVO//////

function positivoNegativo(num1){

    if(num1>0){
        console.log(num1 +' é positivo ')
    } else if(num1<0){
        console.log(num1 +' é negativo ')
    } else{
        console.log('o número informado é zero')
    }
}

positivoNegativo(-1)


//////TRIANGULO A PARTIR DOS ANGULOS/////

function triangulo(a, b, c){

    if ( a>0 && b>0 && c>0){
        if((a + b + c) === 180){
            console.log("true")
        } else{
            console.log("false")
        }

    } else{
        console.log('Valor informado é invalido')
    };

}
triangulo(100, 20, -60)

   

    

