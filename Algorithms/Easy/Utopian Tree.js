function utopianTree(n) {
    
    let cont = 1;
    
    for (let i = 1; i <= n; i++) {
        if (i % 2 != 0) cont = cont * 2;
        else cont++; 
    }
    
    return cont;

}