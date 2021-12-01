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

   let info2 = {
    personagem: 'TioPatinha',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
   }
   console.log(info)