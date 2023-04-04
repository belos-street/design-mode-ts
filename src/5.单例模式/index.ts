class Signleton {
  name: string = ''
  age: number = 0
  static instance: boolean = false
  constructor(_name: string, _age: number) {
    if (!Signleton.instance) {
      this.name = _name
      this.age = _age
      Signleton.instance = true
    }
  }
}