function pickingNumbers(a) {

    let f = new Array(100).fill(0); // Preenche o array de zeros
    let solution = 0;

    for (let num of a) {
        f[num]++;
    }

    for (let i=0; i < f.length - 1; i++){
    
        let two = f[i] + f[i+1];
        
        if(two > solution) solution = two;
    
    }
    
    return solution;

}