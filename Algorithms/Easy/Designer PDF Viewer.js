function designerPdfViewer(h, word) {
    
    let maior = 0;
    let cont = 0;
    
    let alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    for (let i = 0; i < word.length; i++) {
        let tempS = word.charAt(i);
        let temp = h[alfabeto.indexOf(tempS)];
        if (temp > maior) maior = temp;
    }
    
    return word.length*maior;

}