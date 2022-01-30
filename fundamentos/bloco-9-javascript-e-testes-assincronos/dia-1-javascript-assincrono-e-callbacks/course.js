// const despesas = [
//     {
//         gym: 99,
//     },
//     {
//         ifood: 200,
//     },
//     {
//         phone: 60,
//     },
//     {
//         internet: 100,
//     },
// ];

// const renda = 1000;

// const despesaMensal = (renda, despesas, callback) => {
//     const despesaTotal = callback(despesas);
//     const saldoFinal = renda - despesaTotal;

//     console.log(`Balanço do mês:
//       Recebido: R$ ${renda},00
//       Gasto: R$ ${despesaTotal},00
//       Saldo: R$ ${saldoFinal},00 `);
// };

// const somaDespesas = (despesas) => {
//     const custoItem = despesas.map((item) => Object.values(item));
//     const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
//     return despesaTotal
// }

// despesaMensal(renda, despesas, somaDespesas);
// // ==========================================================
// const userNationality = ({ firstName, nationality}) => `${firstName} is ${nationality}`;
// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;

// const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

// const getUser = (callback) => {
//     setTimeout(() =>{
//     const user = {
//         firstName: 'Ivan',
//         lastName: 'Ivanovich',
//         nationality: 'Russian'
//     };
//     console.log(user)
//     console.log(callback(user));
// }, delay());
// };

// getUser(userFullName);
// getUser(userNationality);

// console.log(getUser(userFullName));
// console.log(getUser(userNationality));

// =====================================================
const countryName = ({ name }) => console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

const getCountry = (onSuccess, callback) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if(didOperationSucceed) {
      const country = {
        name: "Brazil",
        hdi: 0.759,
        currency: "Real",
      };
      onSuccess(country);
    } else {
      const errorMessage = "Country could not be found";
      callback(errorMessage)
    }
  }, delay());
};

// Deve imprimir "Returned country is Brazil" no sucesso ou "Error getting country: Country could not be found" em caso de falha
getCountry(countryName, printErrorMessage);

// Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em caso de falha
getCountry(countryCurrency, printErrorMessage);
