export class Employee {
  private name: string
  private age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  say() {
    console.log(`my name is ${this.name}, and i am ${this.age} years old.`)
  }
}
