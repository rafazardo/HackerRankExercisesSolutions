function aVeryBigSum(ar) {
    let sum = 0;
    
    ar.forEach( function (number)  { sum += number; } ) // forEach anda por cada elemento do array
     
    return sum;
}