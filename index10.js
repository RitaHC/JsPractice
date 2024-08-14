var maxProfit = function(prices) {
 let maxProfit = 0

 for (let i = 0; i<prices.length; i++){
    // if current price is more than earlier price, then add the difference to the profit
    if (prices[i]>prices[i-1]){
        maxProfit += prices[i] - prices[i-1]
    }
 }
    // Now sell the 
    console.log(maxProfit)
    return maxProfit
};

maxProfit([7,1,5,3,6,4])
maxProfit([1,2,3,4,5])
maxProfit([7,6,4,3,1]
    )