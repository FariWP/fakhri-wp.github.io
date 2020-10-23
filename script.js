function idealWeight(tinggi, berat, umur, gender) {
    let outputIdeal = 0
    let outputBmi = 0
    let outputCalorie = 0
    let ideal = tinggi-100

    if (!tinggi || !berat || !umur || !gender || tinggi < 50) {
        return `Invalid input`
    }

    if (gender === 'male') {
        outputIdeal = ideal - (ideal * 0,1)
        outputBmi = berat / (tinggi / 10)
        outputCalorie = (((88,4 + (13,4 * berat)) + (4,8 * tinggi)) - (5,68 * umur))
    } else if (gender === 'female'){
        outputIdeal = ideal - (ideal * 0,15)
        outputBmi = berat / (tinggi / 10)
        outputCalorie = ((447,6 + (9,25 * berat)) + (3,10 * tinggi) - (4,33 * umur))
    }

    return `berat ideal: ${outputIdeal}, BMI: ${outputBmi.toFixed(2)}, Kalori/hari yang diharuskan: ${outputCalorie}`
}

// console.log('connect');
console.log(idealWeight(170, 70, 20, 'male'));
console.log(idealWeight());