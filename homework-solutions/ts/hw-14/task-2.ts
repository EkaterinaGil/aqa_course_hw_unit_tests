function mapArray<T, U>(array: T[], callback: (element: T, index: number, array: T[]) => U): U[] {
    const newArr: U[] = [];
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
