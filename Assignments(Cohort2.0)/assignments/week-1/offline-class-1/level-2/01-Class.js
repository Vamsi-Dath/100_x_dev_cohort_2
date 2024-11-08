
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
  // static methods inside a class are associated with the class itself, not instances of the class
  static myType(){
    console.log("Animal")
  }
}

let animal = new Animal('Dog', 4);
console.log(animal.describe());
Animal.myType(); // Animal
