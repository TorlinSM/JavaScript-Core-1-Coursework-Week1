 


function toUpperCase(name) {
  // ... transform name to Upper Case and return it;
  return name.toUpperCase();
}

function createGreeting(name) {
  return "HELLO " + toUpperCase(name);
}

const greeting1 = createGreeting ("Daniel");
const greeting2 = createGreeting ("Irina");
const greeting3 = createGreeting ("Mimi");
const greeting4 = createGreeting ("Rob");
const greeting5 = createGreeting ("Yohannes");

console.log(greeting1)
console.log(greeting2)
console.log(greeting3)
console.log(greeting4)
console.log(greeting5)
