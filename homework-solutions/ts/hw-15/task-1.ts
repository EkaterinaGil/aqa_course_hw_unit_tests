//task 1-1---------------------------------------------------------
// 1 Создайте интерфейс IEmployee {name: string, salary: number, isManager: boolean } и объект QA: IEmployee
interface IEmployee {
    name: string;
    salary: number;
    isManager: boolean;
}

const QA: IEmployee = {
    name: "Екатерина Гиль",
    salary: 50000,
    isManager: false
};

// 2 Создайте тип EmployeeKeys, который будет юнионом названий ключей IEmployee (использовать keyof)
type EmployeeKeys = keyof IEmployee;

// 3 Создайте тип QaKeys, который будет содержать лишь ключи объекта QA(использовать keyof и typeof)
type QaKeys = keyof typeof QA;

// 4 Создайте тип UserType из объекта QA (используйте typeof)
type UserType = typeof QA;

// 5 Создайте тип, в котором все поля интерфейса IEmployee будут необязательными
type OptionalEmployee = Partial<IEmployee>;

// 6 Создайте тип, который будет содержать поля name и salary из интерфейса IEmployee
type NameAndSalaryOnly = Pick<IEmployee, "name" | "salary">;

// 7 Создайте тип, который будет держать все поля из интерфейса IEmployee, кроме isManager
type NoIsManager = Omit<IEmployee, "isManager">;

// 8 Создайте тип, который будет содержать все поля из интерфейса IEmployee и сделает их неизменяемыми (readonly)
type ReadonlyEmployee = Readonly<IEmployee>;

// 9 Создайте объект с помощью Record, в ключах которого будут строки, 
// а в значениях - ключи объекта QA (Используйте Record, keyof, typeof)
type KeysRecord = Record<string, keyof typeof QA>;

//task 1-2---------------------------------------------------------
// Необходимо создать классовую структуру
// 1. Создайте интерфейс IVehicle:
//   Методы:
//     - getDetails(): string — возвращает информацию о транспортном средстве.
//     - start(): string — возвращает строку "The vehicle is starting".

interface IVehicle {
    getDetails(): string;
    start(): string;
}

// 2. Создайте абстрактный класс Vehicle, который имплементирует IVehicle:
//   Реализуйте конструктор с полями:
//     - make (строка)
//     - model (строка)
//   Добавьте методы:
//     - start, возвращающего строку: "The vehicle {mark} {model} is starting.".
//     - Абстрактный метод getDetails, который нужно реализовать в классах-наследниках.

abstract class Vehicle implements IVehicle {
    constructor(public mark: string, public model: string) { };

    start(): string {
        return `The vehicle ${this.mark} ${this.model} is starting.`;
    }

    abstract getDetails(): string;
}

// 3. Создайте класс Car, который наследует Vehicle:
//     - Добавляет поле year (число).
//     - Реализует метода getDetails, возвращающего строку: "{make} {model}, {year}".

class Car extends Vehicle {
    private _year: number;

    constructor(mark: string, model: string, year: number) {
        super(mark, model);
        this._year = year;
    }

    getDetails(): string {
        return `${this.mark} ${this.model}, ${this._year}`;
    }
}

// 4. Создайте объект класса Car и проверьте работоспособность

const myCar = new Car("Audi", "Q5", 2017);

console.log(myCar.start());      // The vehicle Audi Q5 is starting.
console.log(myCar.getDetails()); // Audi Q5 , 2017
