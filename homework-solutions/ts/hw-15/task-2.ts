function getKeyByValue<T extends object, K extends keyof T>(obj: T, value: T[K]): K | undefined {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (obj[key as unknown as K] === value) {
                return key as unknown as K;
            }
        }
    }
    return undefined;
}

const car = {
    mark: "Audi",
    model: "Q5",
    year: 2017
};

const foundKeyName = getKeyByValue(car, "Q5");
console.log(foundKeyName); // model

const foundKeyAge = getKeyByValue(car, 2017);
console.log(foundKeyAge); // year

const notFound = getKeyByValue(car, 2005);
console.log(notFound); // undefined