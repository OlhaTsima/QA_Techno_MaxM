function checkProbabilityTheory(count) {
    let even = 0;
    let odd = 0;

    for (let i = 0; i < count; i++) {
        let randomNumber = Math.round(Math.random() * (1000 - 100)) + 100;

        if (randomNumber % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }

    let evenPercent = (even / count) * 100;
    let oddPercent = (odd / count) * 100;

    console.log("Кількість згенерованих чисел:", count);
    console.log("Парних чисел:", even);
    console.log("Непарних чисел:", odd);
    console.log("Відсоток парних:", evenPercent.toFixed(2) + "%");
    console.log("Відсоток непарних:", oddPercent.toFixed(2) + "%");
}