// BEST TIME TO BUY AND SELL STOCKS

var maxPrices = function (prices){
    // Check for the smallest element in the array
    let minPrice = Math.min(...prices)
    // find index of the min value
    let indexMinPrice = prices.indexOf(minPrice)
    let sellingPrice = 0
    // console.log(prices.length-1)
    // If it is not the last element, 
    if (indexMinPrice == prices.length-1){
        console.log(0)
        return 0
    } else {
        // Find the largest number in the array // that is after the indexMinPrice
        for(let i = indexMinPrice; i <prices.length; i++){
            // find the max number 
            if (sellingPrice < prices[i]){
                sellingPrice = prices[i]
            }
        }
        
        const maxProfit = sellingPrice - minPrice
        console.log(maxProfit)
        return maxProfit


    }
    
}

maxPrices([7,1,5,3,6,4])
maxPrices([7,6,4,3,1])