function miniMaxSum(arr) {
    
    let max = -1;
    let min = 98765432123232;
    
    for (let i = 0; i < arr.length; i++) {
        let contSup = 0;
        for (let j = 0; j < arr.length; j++) {
            if (j === i ) continue;
            contSup += arr[j];
        }
        if (contSup > max) max = contSup;
        if (contSup < min) min = contSup;
    }
    
    console.log(min + " " + max); // ou console.log(min, max);
}