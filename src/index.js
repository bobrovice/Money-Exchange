// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let amount = {};

    if(currency>10000){
        return {error :"You are rich, my friend! We don't have so much coins for exchange"};
    }

    if(currency<=0){
        return amount;
    }

    if (currency>=50){
        amount.H = parseInt(currency/50);
        currency = currency-amount.H*50;
    }

    if (currency>=25){
        amount.Q = parseInt(currency/25);
        currency = currency-amount.Q*25;
    }

    if (currency>=10){
        amount.D = parseInt(currency/10);
        currency = currency-amount.D*10;
    }

    if (currency>=5){
        amount.N = parseInt(currency/5);
        currency = currency-amount.N*5;
    }

    if (currency>=1){
        amount.P = parseInt(currency/1);
        currency = currency-amount.P*1;
    }

    return amount;

};
