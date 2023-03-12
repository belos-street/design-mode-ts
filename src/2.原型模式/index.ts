export class Employee {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  say() {
    return `my name is ${this.name}, and i am ${this.age} years old.`
  }
}