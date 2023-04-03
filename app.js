


const API_URL = "https://api.exchangerate-api.com/v4/latest/";

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




