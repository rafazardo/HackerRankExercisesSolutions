function viralAdvertising(n) {
    let liked = 0;
    let shared = 5;
    
    for (let i = 1; i <= n; i++) {
        liked = liked + Math.floor(shared/2);
        shared = Math.floor(shared/2) * 3;
    }
    
    return liked;
}