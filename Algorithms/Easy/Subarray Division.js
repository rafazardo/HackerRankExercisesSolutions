function birthday(s, d, m) {
    
    let cont = 0;
    
    if (s.length === 1 && m === 1) return 1;
    
    for (let i = 0; i < s.length - m + 1; i++) {
        let sum = 0;
        for (let j = i; j < i + m; j++) sum += s[j];
        if (sum === d) cont++;
    }
    
    return cont;

}