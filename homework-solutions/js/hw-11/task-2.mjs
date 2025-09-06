class Employee {
  #salary;
  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.#salary = salary;
  };
  get firstName() {
    return this._firstName;
  };
  set firstName(value) {
    if (typeof value !== "string" || !(/^[A-Za-z]{2,50}$/.test(value))) throw new Error("Invalid firstName");
    this._firstName = value;
  };
  get lastName() {
    return this._lastName;
  };
  set lastName(value) {
    if (typeof value !== "string" || !(/^[A-Za-z]{2,50}$/.test(value))) throw new Error("Invalid lastName");
    this._lastName = value;
  };
  get profession() {
    return this._profession;
  };
  set profession(value) {
    if (typeof value !== "string" ||
      !(/^([A-Za-z]+(\s[A-Za-z]+)*)$/.test(value)) ||
      value.trim().length === 0) throw new Error("Invalid profession");
    this._profession = value;
  };
  get salary() {
    return this.#salary;
  };
  set salary(value) {
    if (typeof value !== "number" ||
      isNaN(value) ||
      value <= 0 ||
      value >= 10000) throw new Error("Invalid salary");
    this.#salary = value;
  };
  getFullName() {
    return (`${this.firstName} ${this.lastName}`)
  };
}

class Company {
  #employees;
  constructor(title, phone, address, employees = []) {
    this.title = title;
    this.phone = phone;
    this.address = address;
    this.#employees = employees;
  };
  get title() {
    return this._title;
  };
  set title(value) {
    if (typeof value !== "string") throw new Error("Invalid title");
    this._title = value;
  };
  get phone() {
    return this._phone;
  };
  set phone(value) {
    if (typeof value !== "number") throw new Error("Invalid phone");
    this._phone = value;
  };
  get address() {
    return this._address;
  };
  set address(value) {
    if (typeof value !== "string") throw new Error("Invalid address");
    this._address = value;
  };
  addEmployee(employee) {
    if (!(employee instanceof Employee)) throw new Error("It is not instanse of Employee")
    this.#employees.push(employee)
  };

  getEmployees() {
    const getEmp = [...this.#employees]
    return getEmp
  };
  getInfo() {
    return (`Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`)
  };

  findEmployeeByName(firstName) {
    const findEmp = [...this.#employees].find((element) => element.firstName === firstName);
    if (!findEmp) throw new Error("Employee not found")
    return (findEmp)
  };

  #getEmployeeIndex(firstName) {
    for (let i = 0; i < this.#employees.length; i++) {
      if (this.#employees[i].firstName === firstName) {
        return i;
      }
    }
    return -1;
  };

  removeEmployee(firstName) {
    const index = this.#getEmployeeIndex(firstName);
    if (index !== -1) {
      this.#employees.splice(index, 1);
    }
  };

  getTotalSalary() {
    return this.getEmployees().reduce((totalSalary, employee) => totalSalary + employee.salary, 0)
  };

}

// const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
// const emp2 = new Employee('Jane', 'Smith', 'Manager', 5000);
// const emp3 = new Employee('Mark', 'Brown', 'Designer', 4000);

// const company = new Company('Tech Corp', 123456, 'Main Street');
// company.addEmployee(emp1);
// company.addEmployee(emp2);
// company.addEmployee(emp3);

// console.log(company.getTotalSalary()); // 12000
// console.log(company.findEmployeeByName('Jane')); // Employee { firstName: 'Jane', ... }
// company.removeEmployee('jane');
// console.log(company.getEmployees()); // [Employee, Employee]

export { Employee, Company };
