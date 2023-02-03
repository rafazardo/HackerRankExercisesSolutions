function compareTriplets(a, b) {
    
    let points = [];
    points.push(0); points.push(0); 
    
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) points[0]++;
        else if (a[i] < b[i]) points[1]++;
    }
    
    return points;
}