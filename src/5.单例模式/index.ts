export class Signleton {
  static firstInstance: any = null
  private name: string = ''
  private age: number = 0
  constructor(_name: string, _age: number) {
    if (!Signleton.firstInstance) {
      this.name = _name
      this.age = _age
      Signleton.firstInstance = this
    }
    return Signleton.firstInstance
  }
}