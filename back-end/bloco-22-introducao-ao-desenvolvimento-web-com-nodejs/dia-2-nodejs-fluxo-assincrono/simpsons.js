const fs = require('fs').promises;
const rl = require('readline-sync')

// function readAll(){
//   fs.readFile('./simpsons.json', 'utf-8')
//   .then((fileContent) => {
//     const simpsons = JSON.parse(fileContent);
//     const strings = simpsons.map(({id, name}) => `${id} - ${name}`);

//     strings.forEach((string) => console.log(string));
//   })

//     }

   async function readAll(){
      const fileContent = await fs.readFile('./simpsons.json', 'utf-8')
      const simpsons = JSON.parse(fileContent);
      const strings = simpsons.map(({id, name}) => `${id} - ${name}`);
    
        strings.forEach((string) => console.log(string));
      }
    
    
async function getSimpsonById(id) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const askid = rl.questionInt('qual id? ');
  id = askid;
  const lookSimpson = simpsons.find((simpson) => Number(simpson.id) === askid);

  if(!lookSimpson) throw new Error('id não encontrado');
 
  return `${lookSimpson.id} - ${lookSimpson.name}`;

} 

// async function main(id) {
//   const simpson = await getSimpsonById(id);
//   console.log(simpson)
// }

async function filterSimpsons() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

  const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}

// function main() {
//   filterSimpsons();
// }

async function simpsonFam(){
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const familyIds = [1,2,3,4];
  const simpsonsFamily = simpsons
  .filter((simpson) => familyIds.includes(Number(simpson.id)));

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily))
}

function main() {
  simpsonFam();
}



main();
