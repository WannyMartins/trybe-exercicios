/* 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

const a = 2;
const b = 5;

let adicao = a+b;
let subtracao = a-b;
let mult = a*b;
let div = a/b;
let modulo = a%b;

let calculo = "jio";

if (calculo === "adição") {
    console.log(adicao);
} else if (calculo ==="subtração") {
        console.log(subtracao);
} else if (calculo === "multiplicação") {
    console.log(mult);
} else if (calculo === "divisão"){
    console.log(div);
} else if (calculo ==="módulo")  {
    console.log(modulo)
} else{
    console.log("Não é um cálculo válido!")
}
 */

//===============================================
/* const a = 10;
const b = 5;

console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

 *///2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
/* 
let a =2;
let b = 1;

if(a>b) {
    console.log(a)
} else if(b>a){
    console.log(b)
}

==================================
const a = 20;
const b = 21;

if (a > b) {
  console.log("'a' é maior que 'b'");
} else {
  console.log("'b' é maior que 'a'");
};
 */



//3.Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

/* let a =8;
let b = 6;
let c =5;

if(a>b && a>c) {
    console.log(a)
} else if(b>a && b>c) {
    console.log(b)
}else if(c>a && b<c) {
    console.log(c)
}
============================

const a = 6;
const b = 4;
const c = 2;

if (a > b && a > c) {
  console.log('O maior número é: ' + a + ' (a)');
} else if (b > a && b > c) {
  console.log('O maior número é: ' + b + ' (b)');
} else {
  console.log('O maior número é: ' + c + ' (c)');
};
 */
//4 Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

/* const num = 100;

if (num>=1){
    console.log("O número " + num + " é positivo.");
}else if(num<=-1){
    console.log("O número " + num + " é negativo.");
}else{
    console.log("O número " + num + " é zero.");
/* } */

/*let degreeAngleA = 60;
let degreeAngleB = 100;
let degreeAngleC = 15;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0; */



/* if(allAnglesArePositives){
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
} */
/* let nomePeca= "bIspo";

switch (nomePeca.toLowerCase()) {
    case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
}; */

/*  let nota =80;

if(nota < 0 || nota > 100){
    console.log("Erro, não é uma porcentagem de nota válida!")

}else if(nota >= 90 ) {
    console.log("A");
} else if (nota >= 80) {
    console.log("B");
} else if (nota >= 70) {
    console.log("C");
} else if (nota >= 60) {
    console.log("D");
} else if (nota >= 50) {
    console.log("E");
} else if (nota < 50) {
    console.log("F");
}  
 */ 

/* const a = 1;
const b = 1;
const c = 2;

if (a%2===0|| b%2===0 || c%2===0){
  console.log("Existe número par entre os números inserido.")
} else{
  console.log("Só tem números ímpares.")
} */

/* let custo=1.5;
let venda= 2;

let imposto= custo * 20  / 100;

let custoTotal = custo + imposto;

let lucro = venda - custoTotal;
let quantidadeVendida= 1000;

  console.log(quantidadeVendida*lucro);
 */

/* let aliqINSS;
let aliqIR;

let salarioBruto = 3000.00;

if (salarioBruto <= 1556.94) {
    aliqINSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92){
    aliqINSS = salarioBruto * 0.09;  
}else if (salarioBruto <= 5189.82){
  aliqINSS = salarioBruto * 0.11;  
    
} else {
  aliqINSS = 570.88;
};  
salarioBase = salarioBruto-aliqINSS;

if(salarioBase<=1903.98){
  aliqIR =  0;
} else if(salarioBase<=2826.65){
  aliqIR = (salarioBase * 0.075)-142.80;

}else if(salarioBase<=3751.05){
  aliqIR = (salarioBase * 0.15)-354.80;

} else if(salarioBase<=4664.68){
  aliqIR = (salarioBase * 0.225)-636.13;

} else {
  aliqIR = (salarioBase * 0.275)-869.36;

};

console.log("salário Líquido: " +(salarioBase-aliqIR));*/ 




