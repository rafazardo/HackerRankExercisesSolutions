function beautifulDays(i, j, k) {
    
    function reverseString(str) {
        let splitString = str.split(""); // Ira dividir onde nao tem espaco
        // ["h", "e", "l", "l", "o"]
 
        let reverseArray = splitString.reverse(); 
        // ["o", "l", "l", "e", "h"]
 
        let joinArray = Number(reverseArray.join("")); // Ira juntar onde nao tem espaco
        // "olleh"
        
        return joinArray; // "olleh"
    }
    
    let cont = 0;
    
    for (let m = i; m <= j; m++) {
        if ( Math.abs(m - reverseString(m.toString()) ) % k === 0 ) cont++;
    }
 
    return cont;
    
}