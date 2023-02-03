function getMoneySpent(keyboards, drives, b) {
    
    let sum = -1;

    for (let key of keyboards) { // For iterativo
        for (let driv of drives) {
            if (key + driv > sum && key + driv <= b) sum = key + driv;
        }
    }

    return sum;

}