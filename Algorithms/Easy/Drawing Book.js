function pageCount(n, p) {
    
    let cont1 = 0;
    let cont2 = 0;
    
    for (let i = 0; i <= n; i = i + 2) {
        if (i === p || i + 1 === p) break;
        cont1++;
    }
    
    if (n % 2 === 0) {
        for (let i = n; i >= 0; i = i - 2) {
            if (i === p || i + 1 === p) break;
            cont2++;
        }
    }
    else {
        for (let i = n - 1; i >= 0; i = i - 2) {
            if (i === p || i + 1 === p) break;
            cont2++;
        }        
    }
    
    return Math.min(cont1,cont2);

}