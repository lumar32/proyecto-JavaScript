var baseUrl = "https://api.coinranking.com/v2/coins";
var proxyUrl = "https://cors-anywhere.herokuapp.com/";
//si no se visualizan las cotizaciones, entrar al link y solicitar acceso temporal
var apiKey = "coinranking01dc64c13870bc9ab25fadcf2e969497fdbedf74a9fbdd4b";

var apiUrl = `${proxyUrl}${baseUrl}`;
console.log(apiUrl);

fetch(`${proxyUrl}${baseUrl}`, { 
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-My-Custom-Header': `${apiKey}`,
      'Access-Control-Allow-Origin': "*"
    }
})

  .then((response) => {
    if (response.ok) {
      response.json().then((json) => {
        console.log(json.data);
        let coinsData = json.data.coins;

        if (coinsData.length > 0) {
          var cryptoCoin = "";
        }
        //For Loop Starts
        coinsData.forEach((coin) => {
          cryptoCoin += "<tr>";
        cryptoCoin += `<td> ${coin.name}</td>`;
        cryptoCoin += `<td> $${coin.price}</td>`;
/*           cryptoCoin += `<td> ${coin.btcPrice} </td>`; */
        cryptoCoin += `<td> ${coin.symbol}</td>`;"<tr>";
        cryptoCoin += `<td> ${coin.rank}</td>`;
/*           cryptoCoin += `<td> ${coin.tier} </td>`; */
        });
        //For Loop Ends
        document.getElementById("data").innerHTML = cryptoCoin;
      });
    }
  })
  .catch((error) => {
    console.log(error);
  });