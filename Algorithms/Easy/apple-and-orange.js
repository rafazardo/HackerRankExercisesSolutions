function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let quedas = [0,0];
    
    apples.forEach ( function (dist) {
        let newDistance = a + dist;
        if (newDistance >= s && newDistance <= t) quedas[0]++;
    })
    
    oranges.forEach ( function (dist) {
        let newDistance = b + dist;
        if (newDistance >= s && newDistance <= t) quedas[1]++;
    })    

    console.log(quedas[0] + "\n" + quedas[1]); // Faz com que digita o primeiro quedas, qubra a linha, digita o segundo, e por natureza a linha e quebrada
}