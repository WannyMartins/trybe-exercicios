//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//somar elementos do array

/* sum=0;
for (let index = 0; index < numbers.length; index+=1) {
    sum += numbers[index];
  
    
}
console.log(sum);
 */


/*  let sum=0;
for (let index = 0; index < numbers.length; index+=1) {
    sum += numbers[index];  
}

let media= sum / numbers.length
console.log(media);

if(media >= 20){
    console.log("valor maior ou igual a 20")
}else{
    console.log("valor menor que 20")};

let maiorNumero= numbers[0];
    for (let index = 1; index < numbers.length; index+=1) {
       if(numbers[index]>maiorNumero){
           maiorNumero=numbers[index];
       }

    }
console.log(maiorNumero);

let impar=0;


for (let im = 0; im < numbers.length; im=+1) {
   
    if(numbers[im] % 2 !== 0){
        impar+=1;
        }
    
}

if(impar===0){
console.log('nenhum resultado impar encontrado');
}else {
    console.log(impar);
}


 */
// variável menorValor igual a posição 0 do array numbers, então o for vai percorrer todo o array a partir da posição 0 comparando a partir do número 1, se j for menor do que o tamanho do "array", vai fazer o if once a posição em que "j" está em "numbers" for menor que a variável "menorValor", se for menor ele vai substituir o valor de "menorValor" pelo número que está em posição j de numbers, se não não faz nada e pula pra próxima posição. Sendo assim cada vez que encontrar um valor menor no array ele irá atualizar a variável "menorvalor". o "console.log" tem que ser FORA do "for"
/* let menorValor= numbers[0];
    for (let j = 1; j < numbers.length; j+=1) {
       if(numbers[j]<menorValor){
           menorValor=numbers[j];
       }

    }
console.log(menorValor);
 */
/* let array=[];

for (let index = 1; index <= 25; index+=1) {
    array.push(index);
    
}
console.log(array);*/
/* 
/*  let array=[];
/*  let result=[];
/* 
for (let index = 1; index <= 25; index+=1) {
   array.push(index);

}

    console.log(array)

for (let i = 0; i < array.length; i+=1) {
    let div= array[i]/2;
    result.push(div);
        
    }
    
console.log(result);

 */

//buble sort

/* let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] > array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
      
    }

  }

  console.log(array);
   */
/*  */