function diagonalDifference(arr) {
    let sumPrincipal = 0;
    let sumSecundaria = 0;
    let sup1 = 0;
    let sup2 = arr[0].length - 1;
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (i === j) sumPrincipal += arr[i][j];
            if (i === sup1 && j == sup2) { // Aplica o padrao da matriz secundaria (0,3) -> (1,2) -> (2,1) -> (3,0)
                sumSecundaria += arr[i][j];
                sup1++; sup2--;
            }
        }
    }
    
    return Math.abs(sumSecundaria - sumPrincipal); // Funcao math.abs retorna o modulo de um numero

}