const initialPrice = document.querySelector('#initial-price');
const quantityOfStocks = document.querySelector('#stocks-quantity');
const currentPrice = document.querySelector('#current-price');
const showMeBtn = document.querySelector('.show-me-btn');
const output = document.querySelector('.output-message');

const header = document.querySelector('.heading');
const inputs = document.querySelectorAll('input[type=number]');
const headerText = document.querySelector('.header-text');

const defaultGif = document.querySelector('.default-gif');
const profitGif = document.querySelector('.profit-gif');
const lossGif = document.querySelector('.loss-gif');
const noProfitLossGif = document.querySelector('.no-profit-loss-gif');



showMeBtn.addEventListener('click', clickHandler);

function calculateProfitLoss(initial, quantity, current) {
    if (initial > current) {
        let loss = (initial - current) * quantity;
        let lossPercentage = (loss / (initial * quantity)) * 100;
        outputMessage(`Whoops! Your <span>Loss</span> is <span>${loss}</span> and loss <span>Percentage</span> is <span>${lossPercentage.toFixed(2)}%</span>`);
        
    } else if (current > initial) {
        let profit = (current - initial) * quantity;
        let profitPercentage = (profit / (initial * quantity)) * 100;
        outputMessage(`Yay! Your <span>Profit</span> is <span>${profit}</span> and profit <span>Percentage</span> is <span>${profitPercentage.toFixed(2)}%</span>`);
        
    } else {
        outputMessage('<span>No Profit / No Loss</span>');
        
    }
}





function clickHandler() {
    let initPrice = Number(initialPrice.value);
    let stocksQty = Number(quantityOfStocks.value);
    let currPrice = Number(currentPrice.value);

    if (initialPrice.value && quantityOfStocks.value && currentPrice.value) {
        calculateProfitLoss(initPrice, stocksQty, currPrice);
    } else {
        defaultLayout();
        outputMessage('Enter all the details.', './Images/default.webp');
    }

}

function outputMessage(msg) {
    output.innerHTML = msg;
    output.style.display = 'block';
}