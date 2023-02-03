function getTotalX(a, b) {
    let newArray = a.concat(b);
    let max = Math.max(...newArray);
    let numNumbers = 0;
    
    for (let i = 0; i <= max; i++) {
        let boolT = true;
        for (let j = 0; j < a.length; j++) {
            if (i % a[j] != 0) {
               boolT = false;  
               break;
            }  
        }
        if (boolT != false) {
                for (let j = 0; j < b.length; j++) {
                    if (b[j] % i != 0) {
                    boolT = false;  
                    break;
                }                 
            }
        }
        if (boolT == true) numNumbers++;
    }
    
    return numNumbers;

}