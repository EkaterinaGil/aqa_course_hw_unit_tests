function mapArray<T>(array: T[], callback: Function): T[] {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        const newElement = callback(array[i], i, array);
        newArr.push(newElement);
    }
    return newArr;
}

function wrapInArray<T>(value: T): T[] {
    return [value];
}

const wrapResult = mapArray([1, 2, 3], wrapInArray);

console.log(wrapResult);
