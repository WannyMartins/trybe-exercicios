/////MESNSAGEM DE BOAS VINDAS FOR/IN/////

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };



    console.log('Bem vinda(o)! '+ info.personagem)
  
    /////// acrescentar uma nova chave////

  info.recorrente = 'Sim'

  console.log(info)

//////// mostrar em for/in as chaves/////

  for(let key in  info){

    console.log(key)
  }

///////MOSTRAR VALORES DE CHAVES DO OBJETO JUNTOS/////

   let info2 = {
    personagem: 'TioPatinha',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
   }
   
   for (let inform in info) {
    if(
      inform=== 'recorrente' &&
      info[inform] ==='Sim' &&
      info2[inform] ==='Sim'
    ){
      console.log('Ambos são recorrentes');
    
    } else{
      console.log(info[inform] + " e " + info2[inform]);
    }
  }

  ////////////////////////////////////

  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  //// ACESSAR DADOS DO OBJETO/////

  for(let dados in leitor)
  console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + " se chama '" + leitor.livrosFavoritos[0].titulo + "'")
  /////LEMBRAR QUE QUANDO UM OBJETO ESTA DENTRO DO OUTRO OBJETO, PARA ACESSAR UM DADO DELE TEM QUE COLOCAR A POSIÇÃO/////

  leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
  })

  console.log(leitor)

  ///// PARA ADICIONAR EM UM OBJETO DENTRO DE OUTRO UM ARRAY, É NECESSÁRIO O .PUSH().//////

  console.log(leitor.nome+" tem " + leitor.livrosFavoritos.length +' livros favoritos');
  
  