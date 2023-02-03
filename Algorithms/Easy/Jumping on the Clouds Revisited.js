function jumpingOnClouds(c, k) {

    let energy = 100;
    let i = 0;

    do {
        (c[(i+k)%c.length] === 0) ? energy-- : energy = energy - 3;
        
        i = (i+k) % c.length;
        
    } while (i != 0);
    
    return energy;
}