function Employee(name, age) {
  this.name = name
  this.age= age
}

Employee.prototype.say = function(){
  console.log(`my name is ${this.name}, and i am ${this.age} years old.`)
}