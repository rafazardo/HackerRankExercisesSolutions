function divisibleSumPairs(n, k, ar) {
    
    let cont = 0;
    
    for (let i = 0; i < ar.length; i++) {
        for (let j = i; j < ar.length; j++) {
            if (i < j && ((ar[i] + ar[j]) % k) === 0 ) cont++;
        }
    }
    
    return cont;
}