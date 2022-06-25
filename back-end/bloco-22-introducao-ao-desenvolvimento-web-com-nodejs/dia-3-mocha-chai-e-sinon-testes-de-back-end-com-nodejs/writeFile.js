const fs = require('fs');


function writeFile(arquivo, conteudo){
fs.writeFileSync(`${__dirname}/${arquivo}`, conteudo);

  return 'ok'
  }
console.log(writeFile('vamos.txt', 'galera da massa'))

module.exports = writeFile;