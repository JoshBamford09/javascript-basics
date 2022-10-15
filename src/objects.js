const createPerson = (name, age) => {
  return {
    name: name,
    age: age
  };
};

function getName(object) {
  return object.name;
}

const getProperty = (property, object) => {
  return object[property];
};

function hasProperty(property, object) {
  return property in object;
}

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  const findAge = people.map(name => name.age);
  return findAge;
};

const findByName = (name, people) => {
  const newPerson = people.filter(person => person.name === name);
  return newPerson[0];
};

const findHondas = cars => cars.filter(car => car.manufacturer === 'Honda');

const averageAge = people => {

};

const createTalkingPerson = (name, age) => {
  // your code here
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
