function hurdleRace(k, height) {
    
    if (k >= Math.max(...height) ) return 0;
    return Math.abs((k - Math.max(...height)));

}