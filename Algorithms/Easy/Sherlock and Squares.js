function squares(a, b) {
 
    let sqrt_a = Math.ceil(Math.sqrt(a));
    
    let sqrt_b = Math.floor(Math.sqrt(b));
    
    return sqrt_b-sqrt_a + 1;
}
