//1
// Переменная числового типа
const num1: number = 42;

// Переменная строкового типа
const str: string = "Hello, TypeScript!";

// Переменная булевого типа
const isComplete: boolean = true;

// Переменная массива чисел
const numbers: Array<number> = [1, 2, 3, 4, 5];

// Переменная массива строк
const cities: string[] = ["Minsk", "Warsaw", "London"];

// Переменная объекта
const person: { name: string; age: number; city: string } = {
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
interface ICar {
    brand: string;
    model: string;
    year?: number;
}

//4
// Интерфейс Address
interface IAddress {
    street: string;
    city: string;
    zipCode: number;
}

// Интерфейс FullAddress (расширяет Address)
interface IFullAddress extends IAddress {
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
    return obj.price - (obj.price * obj.discount / 100);
}

const product: DiscountedProduct = {
    id: 1,
    name: "Laptop",
    price: 1000,
    discount: 10
};

const finalPrice = calculateDiscount(product);
console.log(finalPrice); // Выведет 990