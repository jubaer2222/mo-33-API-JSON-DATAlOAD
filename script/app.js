const person = {
    name: 'hena',
    age: 10,
    friends:['hero alam','korim'],
    status:true,
}

const newPerson = JSON.stringify(person);
// console.log(newPerson);
const newPerson2 = JSON.parse(newPerson);
// console.log(newPerson2)