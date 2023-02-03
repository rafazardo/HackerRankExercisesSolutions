function findDigits(n) {
    
    let cont = 0;
    let stringNubmer = String(n);
    
    console.log(stringNubmer);
    
    for (let i = 0; i < stringNubmer.length; i++) {
        let number = Number(String(n).charAt(i)); // Number e String transformam valores
        if (n % number === 0) cont++;
    }
    
    return cont;

}