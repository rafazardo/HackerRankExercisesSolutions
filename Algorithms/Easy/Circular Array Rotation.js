function circularArrayRotation(a, k, queries) {
    
    let solution = [];
    
    for (let i = 0; i < k; i++) {
        let temp = a.pop(); // Remove o ultimo elemnto
        a.unshift(temp); // Adiciona no inicio
    }
    
    for (let i of queries) solution.push(a[i]);

    return solution;

}