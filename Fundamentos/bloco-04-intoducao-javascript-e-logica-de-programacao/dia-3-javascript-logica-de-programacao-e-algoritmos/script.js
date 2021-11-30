/* 
/////////////////COQUADRADO DE ASTERISCOS//

let n = 5;// declarar variável"n";
let asterisco = "*";// declarar o simbolo que irá substituir quando rodar o "for"
let asteriscos ="";// ter uma variável vazia que irá receber os simbolos em forma de string e não em forma de array, por isso recebe valor de ("") aspas vazio.

// este primeiro for irá ver o tamanho de n por isso transformará n em sua posição de 1 até ele mesmo. assim sendo let index começa na posição 0 e vai de 1 em 1 até o número declarado em n(1,2,3,4,5.....n).

// e a cada index asteriscos recebe o valor dele atualizado concatenando o simbolo(asterisco="*")
for (let index = 0; index < n; index+=1){
    asteriscos=asteriscos + asterisco;
};

// então tprna-se necessário um "2 for" onde percorre novamento todas asposiçoes em "n" e registra um console log linha de asteriscos 

// A cada posição de "n" o console log irá imprimir o valor atualizado da string asteriscos

//formando o quadrado de asteriscos.

for (let index= 0; index < n; index+=1){
    console.log(asteriscos);
}   
 



 */

//////// TRIANGULO RETANGULO DE ASTERISCOS///////

/* let n = 5;
let simbolo = '*';
let triangulo ="";

for (let index = 0; index < n; index+=1) {
    
    triangulo= triangulo + simbolo;
    console.log(triangulo)
}
 */

//////////INVERTENDO O LADO DO TRIANGULO///////

let n = 5;
let simbolo = '*';
let triangulo ="";

for (let index = 0; index < n; index+=1) {
    
    triangulo= triangulo + simbolo;

    console.log(triangulo)
}

