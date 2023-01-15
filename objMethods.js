// shorthand object properies
const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;

  return {
    max,
    min,
    sum,
    avg,
  };
};

const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

const stats = getStats(reviews);

// computed properties
const role1 = "host";
const person1 = "Jools Holland";
const role2 = "director";
const person2 = "James Cameron";

// the old way
// const team = {};
// team[role1] = person1;
// team[role2] = person2;

// es6
const team = {
  [role1]: person1,
  [role2]: person2,
  [1 + 6 + 9]: "sixteen",
};

// function addProp(obj, key, value) {
//   const copy = { ...obj };
//   copy[key] = value;

//   return copy;
// }

const addProp = (obj, key, value) => {
  return {
    ...obj,
    [key]: value,
  };
};

const res = addProp(team, "happy", ":)");

// adding methods to objects
const math = {
  add: function (x, y) {
    return x + y;
  },
  multiply: function (x, y) {
    return x * y;
  },
};

// method shorthand syntax
const auth = {
  username: "TommyBot",
  login() {
    console.log("LOGGED YOU IN!");
  },
  logout() {
    console.log("GOODBYE!");
  },
};

// intro to keyword THIS
function sayHi() {
  console.log("HI");
  console.log(this);
}

const greet = function () {
  console.log(this);
};

// using THIS in methods
const person = {
  firstName: "Cherilyn",
  lastName: "Sarkisian",
  nickName: "Cher",
  fullName() {
    // console.log(`${this.firstName} ${this.lastName} AKA ${this.nickName}`);
    const { firstName, lastName, nickName } = this;
    return `${firstName} ${lastName} AKA ${nickName}`;
  },
  printBio() {
    console.log(this);
    const fullName = this.fullName();
    console.log(`${fullName} is a person!`);
  },
  laugh: () => {
    console.log(this);
    console.log(`${this.nickName} says HAHAHAHAHA!`);
  },
};

// THIS: invocation context
const printBio = person.printBio;
