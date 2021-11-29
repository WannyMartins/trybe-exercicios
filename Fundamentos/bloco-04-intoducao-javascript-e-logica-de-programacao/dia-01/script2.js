//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;//

/* let numbers = [5, 9, 3, 19, 70, 8, 100,  *//* 2, 35, 27]; */
/* for (let index = 0; index < numbers. *//* length; index++) { */
/*     console.log(numbers[index]); }*/

//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;//
let number = [5, 9, 3, 19, 70, 8, 100, 
    2, 35, 27];
    let resultado=[];
    for (let index = 0; index < number.
    length; index++) {
        resultado = resultado + number[index];
        resultado.push(number[index])
        console.log(resultado)
        
    }