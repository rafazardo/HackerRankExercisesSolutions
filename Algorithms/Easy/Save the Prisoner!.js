function saveThePrisoner(n, m, s) {
    
    let temp = m % n;

    let result = (s + (temp - 1)) % n;
    
    return result === 0 ? n : result;

}