//1
// Переменная числового типа
let num1: number = 42;

// Переменная строкового типа
let str: string = "Hello, TypeScript!";

// Переменная булевого типа
let isComplete: boolean = true;

// Переменная массива чисел
let numbers: Array<number> = [1, 2, 3, 4, 5];

// Переменная массива строк
let cities: string[] = ["Minsk", "Warsaw", "London"];

// Переменная объекта
let person: { name: string; age: number; city: string } = {
    name: "Alice",
    age: 30,
    city: "Minsk"
};

//2
// Псевдоним типа User
type User = {
    name: string;
    age: number;
    email?: string;
};

// Псевдоним типа Grade
type Grade = 'junior' | 'middle' | 'senior';

//3
// Интерфейс Car
interface Car {
    brand: string;
    model: string;
    year?: number;
}

//4
// Интерфейс Address
interface Address {
    street: string;
    city: string;
    zipCode: number;
}

// Интерфейс FullAddress (расширяет Address)
interface FullAddress extends Address {
    country: string;
}

//5
// Базовый тип Product
type Product = {
    id: number;
    name: string;
    price: number;
};

// Объединённый тип DiscountedProduct (расширяет тип Product добавлением поля discount)
type DiscountedProduct = Product & {
    discount: number;
};

//6
function calculateDiscount(obj: DiscountedProduct): number {
    return obj.price - obj.discount;
}

const product: DiscountedProduct = {
    id: 1,
    name: "Laptop",
    price: 1000,
    discount: 10
};

const finalPrice = calculateDiscount(product);
console.log(finalPrice); // Выведет 990