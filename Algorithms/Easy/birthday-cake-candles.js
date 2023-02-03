function birthdayCakeCandles(candles) {
    
    const maxCandles = Math.max(...candles); // Retorna maior numero de um array
    let sumNumbers = 0;
    
    candles.forEach (function (number) {
        if (number === maxCandles) sumNumbers++;
    })
    
    return sumNumbers;

}