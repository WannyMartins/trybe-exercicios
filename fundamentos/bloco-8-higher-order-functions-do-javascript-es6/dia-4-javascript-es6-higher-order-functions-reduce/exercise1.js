//1 - Dada uma matriz, transforme em um array.


const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  const flatten = (novoArray, itemAtual) => {
      return novoArray.concat(itemAtual);
    // escreva seu código aqui
  };
  const arrayAtual = arrays.reduce(flatten)

  console.log(arrayAtual);
/// array para exercícios 2,3 e4
  const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

  //2 - Crie uma string com os nomes de todas as pessoas autoras.

  
function reduceNames() {
  return  books
  .map((book) => book.author.name)
  .reduce((nomesDosAutores, nome) => `${nomesDosAutores} ${nome},` );

  // escreva seu código aqui
};
console.log(reduceNames())

//3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.


function averageAge() {
  const idades = books
   .map((book) => book.releaseYear - book.author.birthYear);
   const idadesReduce = idades.reduce((totalIdades, idade, index) => (totalIdades += idade));  
   return idadesReduce / idades.length;
}

console.log(averageAge())

//4 - Encontre o livro com o maior nome.
function longestNamedBook() {
    return books
    .reduce((arrayBook, book) => {
    if(book.name.length > arrayBook.name.length) {
        return book;
    }
    return arrayBook;
  });
}

console.log(longestNamedBook());

//5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
      return names.reduce((acc, curr) =>
      acc + curr.split('').reduce((acumulator, current) => {
          if (current === 'a' || current === 'A') return acumulator + 1; return acumulator;
      }, 0), 0);
  }
  console.log(containsA())