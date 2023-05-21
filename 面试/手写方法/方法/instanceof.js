function instance(ins, cons) {
  let left = ins.__proto__;
  const right = cons.prototype;
  while (true) {
    if (left === null) {
      return false;
    }
    if (left === right) {
      return true;
    }
    left = left.__proto__;
  }
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function () {
  console.log(`My name is ${this.name}, and I'm ${this.age} years old`);
};

let lu = new Person("lu", 24);
lu.introduce();
console.log(instance(lu, String));
