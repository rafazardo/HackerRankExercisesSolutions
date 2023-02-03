function breakingRecords(scores) {
    
    let max = scores[0];
    let min = scores[0];
    let cont = [0,0];
    
    scores.forEach ( function (score) {
        if (score > max) {
            max = score;
            cont[0]++;
        }
        
        if (score < min) {
            min = score;
            cont[1]++;
        }
    })
    
    return cont;
}