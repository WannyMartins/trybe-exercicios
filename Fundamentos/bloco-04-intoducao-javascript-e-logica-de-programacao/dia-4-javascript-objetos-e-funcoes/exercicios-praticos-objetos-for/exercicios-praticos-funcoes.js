function verificaPalindromo(string){
    
    let reverse = string.split('').reverse().join('');
    if(reverse === string){
        return true
    }else{
        return false
    }
    
}

console.log(verificaPalindromo('altamiro de barros'))

/////////////////////////////////////////////

function maiorValor (array){
    let indiceMaior=0;
    for(let index in array){
        if (array[indiceMaior]< array[index]){
            indiceMaior = index;
        }

    }
    return indiceMaior;
}
console.log(maiorValor([2, 4, 6, 7, 10, 0, -3]))




function menorValor (array){
    let indiceMenor=0;
    for(let index in array){
        if (array[indiceMenor]> array[index]){
            indiceMenor= index;
        }

    }

    return indiceMenor;
}
console.log(menorValor([2, 4, 6, 7, 10, 0, -3]))

function maiorPalavra(nomes){
    let maiorNome=nomes[0];
    for(let indice in nomes){
       
        if(maiorNome.length < nomes[indice].length){
        maiorNome = nomes[indice];
        }
        
    }
    return maiorNome
}

console.log (maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])
);


function menorPalavra(nomes){
    let menorNome=nomes[0];
    for(let indice in nomes){
       
        if(menorNome.length > nomes[indice].length){
        menorNome = nomes[indice];
        }
        
    }
    return menorNome
}

console.log (menorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])
);
 ////////////////////////////////////////////////

 function maisRepete (numeros){

    let contRepetido=0;
    let contNumero  = 0;
    let indiceNumeroRepetido=0;

    for(let indice in numeros){
        let verificaNumero = numeros[indice];
        for(let indice2 in numeros){
            if(verificaNumero === numeros[indice2]) {
                contNumero +=1;
            }
        }
        console.log(contNumero)

       // if(contNumero > contRepetido)
    }


 }
 maisRepete([2, 3, 2, 5, 8, 2, 3])

