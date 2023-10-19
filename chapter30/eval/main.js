// eval  with

// eval("console.log('Hello World')")
const person = {
  name: 'Alice',
  age: 30,
  sayHello() {
    console.log(this)
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

with(person) {
  sayHello()
  console.log(this)
}