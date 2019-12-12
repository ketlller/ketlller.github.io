var btn = document.querySelector('button');
var div = document.querySelector('.div');

var divBuy = document.querySelector('.buy span');
var divSell = document.querySelector('.sell span');
var divBuyPZM_BTC = document.querySelector('.buyPZM_BTC span');
var divSellPZM_BTC = document.querySelector('.sellPZM_BTC span');

var divBuyCOIN_USD = document.querySelector('.buyCOIN_USD span');
var divSellCOIN_USD = document.querySelector('.sellCOIN_USD span');
var divBuyCOIN_USD_livecoin = document.querySelector('.buyCOIN_USD_livecoin span');
var divSellCOIN_USD_livecoin = document.querySelector('.sellCOIN_USD_livecoin span');
var divBuyCOIN_USD_hotbit = document.querySelector('.buyCOIN_USD_hotbit span');
var divSellCOIN_USD_hotbit = document.querySelector('.sellCOIN_USD_hotbit span');

var divBuyCOIN_USD_livecoin1 = document.querySelector('.BuyCOIN_USD_livecoin1 span');
var divSellCOIN_USD_livecoin1 = document.querySelector('.SellCOIN_USD_livecoin1 span');
var divBuyCOIN_USD1 = document.querySelector('.BuyCOIN_USD1 span');
var divSellCOIN_USD1 = document.querySelector('.SellCOIN_USD1 span');
var divBuyCOIN_USD_hotbit1 = document.querySelector('.BuyCOIN_USD_hotbit1 span');
var divSellCOIN_USD_hotbit1 = document.querySelector('.SellCOIN_USD_hotbit1 span');
 
var btcalphalivecoin = document.querySelector('.inputdrub1 span');
var livecoinbtcalpha = document.querySelector('.inputdrub2 span');
var btcalphahotbit = document.querySelector('.inputdrub3 span');
var hotbitbtcalpha = document.querySelector('.inputdrub4 span');
var hotbitlivecoin = document.querySelector('.inputdrub5 span');
var livecoinhotbit = document.querySelector('.inputdrub6 span');

var counter = document.querySelector('#counter');
var counter1 = document.querySelector('#counter1');
var counter2 = document.querySelector('#counter2');
var counter3 = document.querySelector('#counter3');
var counter4 = document.querySelector('#counter4');
var counter5 = document.querySelector('#counter5');


let proxyUrl = 'https://cors-anywhere.herokuapp.com/',

    targetUrl_COIN_USD = 'https://btc-alpha.com/api/v1/orderbook/PZM_USD/'; 
    targetUrl_COIN_USD_Livecoin = 'https://api.livecoin.net/exchange/order_book?currencyPair=PZM/USD'; 
      targetUrl_COIN_USD_hotbit1 = 'https://api.hotbit.io/api/v1/order.book?market=PZM/USDT&side=1&offset=0&limit=1'; 
      targetUrl_COIN_USD_hotbit2 = 'https://api.hotbit.io/api/v1/order.book?market=PZM/USDT&side=2&offset=0&limit=1'; 


    
let resUrl1 = proxyUrl + targetUrl_COIN_USD;
let resUrl2 = proxyUrl + targetUrl_COIN_USD_Livecoin;
let resUrl3 = proxyUrl + targetUrl_COIN_USD_hotbit1;
let resUrl4 = proxyUrl + targetUrl_COIN_USD_hotbit2;

console.log()

 var currentPrice_BuyCOIN_USD = null;
 var currentPrice_SellCOIN_USD = null;
  var currentPrice_BuyCOIN_USD_livecoin = null;
  var currentPrice_SellCOIN_USD_livecoin = null;
var currentPrice_BuyCOIN_USD_hotbit = null;
var currentPrice_SellCOIN_USD_hotbit = null;

 var previousPositive = true; 
var previousPositive1 = true; 
var previousPositive2 = true; 
var previousPositive3 = true; 
var previousPositive4 = true; 
var previousPositive5 = true; 




 btn.addEventListener('click', () => {  


 
   fetch(resUrl1)
    .then(res => {
      res.json().then(body => {
      divBuyCOIN_USD.innerHTML = body.buy[0].price;  
    divBuyCOIN_USD1.innerHTML = body.buy[0].amount; 
      divSellCOIN_USD.innerHTML = body.sell[0].price;
    divSellCOIN_USD1.innerHTML = body.sell[0].amount;
    
      currentPrice_BuyCOIN_USD = body.buy[0].price;
      currentPrice_SellCOIN_USD = body.sell[0].price;
    
    
   
    });
  })
  .catch(err => console.log(err)); 


     

   fetch(resUrl2)
    .then(res => {
      res.json().then(body => {  
      divBuyCOIN_USD_livecoin.innerHTML = body.bids[0][0];
    divBuyCOIN_USD_livecoin1.innerHTML = body.bids[0][1];
      divSellCOIN_USD_livecoin.innerHTML = body.asks[0][0];
    divSellCOIN_USD_livecoin1.innerHTML = body.asks[0][1];
    
       currentPrice_BuyCOIN_USD_livecoin = body.bids[0][0];
       currentPrice_SellCOIN_USD_livecoin = body.asks[0][0];
        
 var value = (((currentPrice_BuyCOIN_USD*100)/currentPrice_SellCOIN_USD_livecoin)-100).toFixed(2);   
      livecoinbtcalpha.innerHTML = value;
 var value1 = (((currentPrice_SellCOIN_USD_hotbit*100)/currentPrice_SellCOIN_USD_livecoin)-100).toFixed(2);
      livecoinhotbit.innerHTML = value1;    
 var value2 = (((currentPrice_BuyCOIN_USD_livecoin*100)/currentPrice_SellCOIN_USD)-100).toFixed(2); 	 
      btcalphalivecoin.innerHTML = value2;        
  var value3 = (((currentPrice_BuyCOIN_USD_livecoin*100)/currentPrice_BuyCOIN_USD_hotbit)-100).toFixed(2);
      hotbitlivecoin.innerHTML = value3; 
 var value4 = (((currentPrice_SellCOIN_USD_hotbit*100)/currentPrice_SellCOIN_USD)-100).toFixed(2);         
      btcalphahotbit.innerHTML = value4;
 var value5 = (((currentPrice_BuyCOIN_USD*100)/currentPrice_BuyCOIN_USD_hotbit)-100).toFixed(2);      
      hotbitbtcalpha.innerHTML = value5; 	      
      console.log(body);	      
	      
      if(value > 0) {
        if(previousPositive) {
          counter.innerHTML++;
          previousPositive = false;
        }
      } else {
        previousPositive = true;
      }
        
        
        if(value1 > 0) {
        if(previousPositive1) {
          counter1.innerHTML++;
          previousPositive1 = false;
        }
      } else {
        previousPositive1 = true;
      }
        
        if(value2 > 0) {
        if(previousPositive2) {
          counter2.innerHTML++;
          previousPositive2 = false;
        }
      } else {
        previousPositive2 = true;
      }
        
        if(value3 > 0) {
        if(previousPositive3) {
          counter3.innerHTML++;
          previousPositive3 = false;
        }
      } else {
        previousPositive3 = true;
      }
        
        if(value4 > 0) {
        if(previousPositive4) {
          counter4.innerHTML++;
          previousPositive4 = false;
        }
      } else {
        previousPositive4 = true;
      }
        
        if(value5 > 0) {
        if(previousPositive5) {
          counter5.innerHTML++;
          previousPositive5 = false;
        }
      } else {
        previousPositive5 = true;
      }
        
	      
if(currentPrice_SellCOIN_USD_livecoin < currentPrice_BuyCOIN_USD && $('#livecoinbtcalpha_notificator').prop('checked'))beep();	      
if(currentPrice_SellCOIN_USD_livecoin < currentPrice_SellCOIN_USD_hotbit && $('#livecoinhotbit_notificator').prop('checked'))beep();	      
if(currentPrice_SellCOIN_USD < currentPrice_BuyCOIN_USD_livecoin && $('#btcalphalivecoin_notificator').prop('checked'))beep();
if(currentPrice_BuyCOIN_USD_hotbit < currentPrice_BuyCOIN_USD_livecoin && $('#hotbitlivecoin_notificator').prop('checked'))beep();        
if(currentPrice_SellCOIN_USD < currentPrice_SellCOIN_USD_hotbit && $('#btcalphahotbit_notificator').prop('checked'))beep();        
if(currentPrice_BuyCOIN_USD_hotbit < currentPrice_BuyCOIN_USD && $('#hotbitbtcalpha_notificator').prop('checked'))beep();        
       
          
      
          
     
        
     
    console.log(body);

    });
  })
  .catch(err => console.log(err)); 
  
  
  fetch(resUrl3)
    .then(res => {
      res.json().then(body => {  
      
    divBuyCOIN_USD_hotbit.innerHTML = body.result.orders[0].price;
    divBuyCOIN_USD_hotbit1.innerHTML = body.result.orders[0].left;
     
    currentPrice_BuyCOIN_USD_hotbit = body.result.orders[0].price;
     
        
         
      
        
       
     console.log(body);

    });
  })
  .catch(err => console.log(err)); 
  
  
   fetch(resUrl4)
    .then(res => {
      res.json().then(body => {  
 	 divSellCOIN_USD_hotbit.innerHTML = body.result.orders[0].price;
   divSellCOIN_USD_hotbit1.innerHTML = body.result.orders[0].left;
    
   currentPrice_SellCOIN_USD_hotbit = body.result.orders[0].price;
            
    console.log(body);

    });
  })
  .catch(err => console.log(err)); 
  
  
   });



  function beep() {
	(new Audio("beep.wav")).play();
};
  
