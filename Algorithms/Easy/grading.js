function gradingStudents(grades) {
    
    let newNotas = [];
    
    grades.forEach ( function (nota) {
        let multiplo = 0;

        for (let i = nota; i <= 100; i++) {
            if (i % 5 === 0) {
                multiplo = i;
                break;
            }
        }
        
        if (nota < 38) newNotas.push(nota);
        else if (Math.abs(nota - multiplo) < 3) newNotas.push(multiplo);
        else newNotas.push(nota);
    })
    
    return newNotas;

}