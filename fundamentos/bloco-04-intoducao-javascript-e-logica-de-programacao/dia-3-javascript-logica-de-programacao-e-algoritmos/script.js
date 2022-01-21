/////////FATORIAL///////

/* 
let fatorial = 1;
for(let index = 10; index>0; index -=1){
    fatorial*=index;//é o mesmo que fatorial=fatorial*index
}

console .log(fatorial);

 */

/////// STRING INVERTIDA//////////////

/* let word = 'wanny';
let wordI ='';
for (let index = word.length-1; index >=0 ; index-=1) {
    wordI+=word[index];
    
}
console.log(wordI);
 */

/////// MENOR E MAIOR PALAVRA ARRAY//////////////////


/*
let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra=array[0];
let menorPalavra=array[0];

for (let index = 0; index < array.length; index+=1) {
    if(array[index].length > maiorPalavra.length){
        maiorPalavra=array[index];
    }   
}


for (let index= 0; index < array.length ; index+=1) {
    if(array[index].length < menorPalavra.length){
        menorPalavra=array[index];
    }  
}
console.log(maiorPalavra);

console.log(menorPalavra);
 */

////// MAIOR NUMERO PRIMO/////////////////

/* let maiorNumeroPrimo =0;

for (let numeroAtual = 0; numeroAtual <=50; numeroAtual+=1) {
    let ehPrimo = true;
    for (let divisorAtual = 2; divisorAtual < numeroAtual; divisorAtual +=1 ) {
       if(numeroAtual % divisorAtual===0){;
        ehPrimo=false;
        
        }
    }
    if(ehPrimo){
        maiorNumeroPrimo=numeroAtual;

    }
    
}
console.log(maiorNumeroPrimo)
 */




/////////////////QUADRADO DE ASTERISCOS//

/*
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
/*let n = 5;
let simbolo = '*';
let triangulo ="";

for (let index = 0; index < n; index+=1) {
    
    triangulo= triangulo + simbolo;
    console.log(triangulo)
}
 */

//////////INVERTENDO O LADO DO TRIANGULO///////

/*  let n = 5;
 let simbolo = '*';
 let triangulo ='';
 let posicao=n;// acrescentar a posição em que vamos começar a imprimir o triangulo, ela recebe o valor do tamanho de n///
 
 for (let linha = 0; linha < n; linha+=1) {

////// dentro do for vamos criar outro for para controlar em que coluna estamos naquela linha

     for (let coluna = 0; coluna <= n; coluna+=1) {

        ///////// abaixo ffaremos a verificação se ja estamos na coluna e na posição onde queremos começar a imprimir os asteriscos////

         if (coluna < posicao) {

            ////se a coluna atual for menor que a coluna atual que quero comçar a imprimir os asteriscos ela vai receber um espaço;

             triangulo=triangulo+' ';

             ///se a culuna atual for igual ou superior ele irá imprimir asteriscos conforma a linha.

         } else {
             triangulo=triangulo+simbolo
         };
         
     }

     console.log(triangulo);

     ////após imprimir a linha eu devo zerar a  variável triangulo com a linha impressa para que possa imprimir a próxima com a quantidade correta de asteriscos

     triangulo='';
     /// além disso tenho que fazer o asterisco começar uma coluna antes na proxima repetição

     posicao-=1;
    };
 */


 ///////////TRIANGULO CENTRALIZADO/////////

 // Primeiro temos que descobrir o centro da piramide, então a gente pega o tamanho n +1 e divide por 2///


/* let n = 15;
let symbol = '*';
let inputLine = '';

// a altura da piramide não vai mais ser 'n' e sim o valor do centro da matriz (midOfMatrix) pra que ela fique uniforme//

// por isso o "for" não vai mais ser menor que "n" e sim menor do que "midOfMatrix"
let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

// para controlar a quantidade de espaços antes e depois do asterisco precisaremos de 2 variáveis "controlLeft" e "controlRigth", que no caso ambas receberão o meio da base da piramide "midOfMatrix" como valor. (porque o asterisco fica do meio, então o "constrolLeft" fica a esquerda dp "midOfMatrix" e o "controlRight" fica a direita do "midOfMatrix")

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {

    // no exercício anterior esse"if" controlava o local onde seria impresso o asterisco, neste caso também será, porem terá as diuas variáveis para a esquerda e direita
    if (columnIndex > controlLeft && columnIndex < controlRight) {
        //neste caso a condição if muda pq irá imprimir quando estiver no centro "entre esquerda e direita"
      inputLine = inputLine + symbol;
    } else {
        // o else tbm muda pq no caso se não estiver no centro, terá que impromir espaço
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  // aqui mudamos para que vá para a direita somando de um em um
  controlRight += 1;
  // e para a esquerda diminuindo de 1 em 1.
  controlLeft -= 1
};
 */

//////////TRIANGULO COM CENTRO VAZADO/////
/* let n = 11;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';

for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';

  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}
 */