function angryProfessor(k, a) {
    let cont = 0;
    
    for (let aluno of a) if (aluno <= 0) cont++;
    
    if (cont >= k) return "NO";
    else return "YES";

}