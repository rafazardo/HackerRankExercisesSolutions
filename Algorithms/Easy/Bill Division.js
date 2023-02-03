function bonAppetit(bill, k, b) {
    
    let totalPrice = 0;
    
    bill.forEach ((price, index) => {
        if (index != k) totalPrice += price;
    })
    
    if (totalPrice/2 === b) console.log("Bon Appetit");
    else console.log(b - totalPrice/2); 

}