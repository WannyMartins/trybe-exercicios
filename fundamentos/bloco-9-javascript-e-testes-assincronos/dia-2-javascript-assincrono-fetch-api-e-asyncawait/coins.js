
const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coin = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());
//  console.log;(rank)
 return coin;

}

const setCoins = async () => {
   const coins = await fetchCoins();

   const ul = document.getElementById("coins-list");

   coins.filter((coin) => Number(coin.rank) <= 10)
   .forEach((coin) => {
     const newLi = document.createElement('li');
     const usdPrice = Number(coin.priceUsd);

     newLi.innerText = `${coin.name} (${coin.symbol}): $ ${usdPrice.toFixed(2)}`;

     ul.appendChild(newLi);
   })
  


}


window.onload = setCoins();
