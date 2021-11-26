/* //const myName = "Wanny";
//const birthCity = "BH";
//let birthYear = 1988;
//birthYear = 2030;
//
//birthCity = "BH";

const { Console } = require("console");

//console.log(myName)
//console.log(birthCity)
//console.log(birthYear)

// const base = 5;
// let height = 8;
// const area = base * height;
// console.log(area);
// const perimeter = base *2 + height*2;
// console.log(perimeter)

const notaDesafio = 2;
if (notaDesafio>=80){
    console.log("Parabéns, você foi aprovada(o)!")
}
else if (notaDesafio >= 60 && notaDesafio < 80) {
    console.log("Você está na nossa lista de espera")
} 
else if(notaDesafio < 60) {
    console.log("Você foi reprovado(a)")
}

 
const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);*/
/* const currentHour = 12;
let message;
if (currentHour >= 22) {
     message = "Não deveríamos comer nada, é hora de dormir"
   
} else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D"    
} else if (currentHour >= 14 && currentHour < 18){
    message= "Vamos fazer um bolo pro café da tarde?"
} else if ( currentHour>=11 && currentHour <=14){
    message="Hora do almoço!!!"
} 
 else{ 
    message="Hmmm, cheiro de café recém passado"
}
console.log(message)
 */

/* let weekDay = "sabado";
 if( weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
     console.log("Oba, mais um dia de aprendizado na Trybe >:D")
 } else {
     console.log("FINALMENTE, descanso merecido UwU")
 }
 */

 let candidato= "reprovada";
 switch (candidato) {
     case "aprovada":
         console.log("Aprovada")         
         break;
    
    case "lista":
        console.log("Lista de Espera")  
        break;

    case "reprovada":
        console.log("Reprovada")  
        break;
                 
    default:
        console.log("Não se aplica")
         break;
 }