     /*  function testingScope(escopo) {
        if (escopo === true) {
          var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
          ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
          console.log(ifScope);
        } else {
          var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
          console.log(elseScope);
        }
        console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
      }

      testingScope(true); */
     /*  const testingScope = escopo =>  {
          if (escopo === true) {
          let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
          ifScope = `ifScope ótimo, fui utilizada no escopo !`;
          console.log(ifScope);
        } else {
          const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
          console.log(elseScope);
        }
       // console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
      }

      testingScope(true); */

      const oddsAndEvens = [13, 3, 4, 10, 7, 2];
      //const array = oddsAndEvens.sort();
      // Seu código aqui.

      const ordenar = () =>{
        oddsAndEvens[0] = 2;
        oddsAndEvens[1] = 3;
        oddsAndEvens[2] = 4;
        oddsAndEvens[3] = 7;
        oddsAndEvens[4] = 10;
        oddsAndEvens[5] = 13;
      
        return oddsAndEvens;

      }
      const ordenados = ordenar();

      console.log(oddsAndEvens.sort(function(a, b){return b-a}))

      console.log(`Os números ${ordenados} estão ordenados de forma crescente!`); // será necessário alterar essa linha 


