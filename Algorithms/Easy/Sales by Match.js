function sockMerchant(n, ar) {
    
    let cont = 0;
    
    for (let i = 0; i < ar.length; i++) {
        for (let j = i + 1; j < ar.length; j++) {
            if (ar[i] === -1) break;
            
            if (ar[i] === ar[j]) {
                cont++;
                ar[j] = -1;
                ar[i] = -1;
                break;
            }
        }
    }

    return cont;
}
