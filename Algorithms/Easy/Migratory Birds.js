function migratoryBirds(arr) {
    
    let newArr = [0,0,0,0,0];
    
    arr.forEach ( function (id) {
        
        let tempId = id - 1;
        
        newArr[tempId]++;
        
    })
    
    let maxBird = Math.max(...newArr);

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === maxBird) return i + 1;
    }
}