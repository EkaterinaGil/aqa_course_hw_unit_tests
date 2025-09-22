//1
function wrapInArray<T>(value: T): T[] {
    return [value];
}

const numberArray = wrapInArray(5); // [5]
const stringArray = wrapInArray('Hello'); // ['Hello']
console.log(numberArray);
console.log(stringArray);

//2
function getLastItem<T>(array: T[]): T {
    return array[array.length - 1]
}

console.log(getLastItem([1, 2, 3, 4])); // 4
console.log(getLastItem(['a', 'b', 'c'])); // 'c'

//3
interface IPair<T, U> {
    first: T;
    second: U
}

function describePair<T, U>(obj: IPair<T, U>) {
    return `${obj.first} and ${obj.second}`
}

console.log(describePair({ first: 'Alice', second: 30 })); // "Alice and 30"
