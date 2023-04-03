// //l4b5Xa4j1dqphkWHttzxYAiXqNaXuqnq
// const api = 'https://api.exchangeratesapi.io/v1/';

// function params (paramsObj) {
//      return new URLSearchParams ({
//          access_key: 'l4b5Xa4j1dqphkWHttzxYAiXqNaXuqnq',
//       ...paramsObj }); }

// function getData(){
//     fetch(api).then(res=>res.json())
//     .then(data=>{
//         console.log(data);
//     })
//     .catch((err) => console.warn(err));
// }

// getData(api);


const API_URL = "https://api.exchangerate-api.com/v4/latest/";

// Döviz kuru fonksiyonu
async function getExchangeRate(baseCurrency, targetCurrency) {
  try {
    const response = await fetch(`${API_URL}${baseCurrency}`);
    const data = await response.json();
    console.log(data)
    const rate = data.rates[targetCurrency]
    
    
    ;
  
 

    return rate;

  } catch (error) {
    console.log(error);
  }
}



// USD, EUR, GBP kurlarını al ve konsola yazdır
getExchangeRate("USD", "TRY").then(rate => {
    document.getElementById("dollar").textContent = rate;
  
});
getExchangeRate("EUR", "TRY").then(rate => {
    document.getElementById("euro").textContent = rate;
 
});
getExchangeRate("GBP", "TRY").then(rate => {
    document.getElementById("sterlin").textContent = rate;

});

// function setData(USD, EURO, GBP) {
//      const dollar = document.getElementById('dollar');
//       const euro = document.getElementById('euro');
//        const sterlin = document.getElementById('sterlin');
//         dollar.textContent = USD.toString().slice (0, 4);
//          euro.textContent = EURO.toString().slice(0, 4);
//           sterlin.textContent = GBP; }


