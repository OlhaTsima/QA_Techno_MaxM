var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};
services["Розбити скло"] = "200 грн";

services.price = function () {
    let total = 0;
    for (let key in this) {
        let value = this[key];
        if (typeof value === "string") {
            let number = parseInt(value);
            total = total + number;
        }
    }
    return total;
};
services.minPrice = function () {
    let min = 999999;
    for (let key in this) {
        let value = this[key];
        if (typeof value === "string") {
            let number = parseInt(value);
            if (number < min) {
                min = number;
            }
        }
    }
    return min;
};
services.maxPrice = function () {
    let max = 0;
    for (let key in this) {
        let value = this[key];
        if (typeof value === "string") {
            let number = parseInt(value);
            if (number > max) {
                max = number;
            }
        }
    }
    return max;
};
console.log("Сума:", services.price());
console.log("Мінімум:", services.minPrice());
console.log("Максимум:", services.maxPrice());