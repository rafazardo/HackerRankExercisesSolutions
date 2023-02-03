function permutationEquation(p) {
    let solution = [];
    
    p.unshift(0);
    
    for (let i = 1; i <= p.length; i++) { 
        for (let t = 1; t <= p.length; t++) {
            if (i === p[p[t]]) solution.push(t);
        }
    }
    
    return solution;
}