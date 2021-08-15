var initialPrice = document.querySelector("#initial");
var stocksQuantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#box");

submitBtn.addEventListener("click", submitHandler);

function submitHandler(){
     var ip = Number(initialPrice.value);
     var qty = Number(stocksQuantity.value);
     var cp = Number(currentPrice.value);

    if(ip == "" || qty == "" || cp == ""){
        showOutput(`<h2>Some fields are blank !</h2> <span>🙄</span>`);
    }else{
        calProfitLoss(ip, qty, cp);
    }
}

function calProfitLoss(initial, quantity, current){
    if(initial > current){
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        showOutput(`<h2>Loss Percentage is ${lossPercentage.toFixed(2)}%</h2> <span>😢</span>`);
    }else if(initial < current){
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        showOutput(`<h2>Profit Percentage is ${profitPercentage.toFixed(2)}%</h2> <span>😍</span>`);
    }else{
        showOutput(`<h2>No Loss and No Profit</h2> <span>🤷</span>`);
    }
}

function showOutput(msg){
    outputBox.innerHTML = msg;
}

