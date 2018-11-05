
function Scooter(year, color, model){
   this.year = year
   this.color = color
   this.model = model
}

console.log(new Scooter('1999', 'light-bleu', 'Scooter-X- v1.23').color);
console.log(new Scooter('1999', 'light-bleu', 'Scooter-X- v1.23').model);

function Driver(name, age, experience) {
  this.name = name
  this.age = age
  this.experience = experience
}
let mrBob = new Driver("Mr. Bob", 23, "Level: Four")

console.log(mrBob.experience);


function PickupLocation( address,city){
  this.address = address
  this.city = city
}
console.log(new PickupLocation('321 West 4th Street', "New York").address);


// Create a constructor function for each of the following:
// + Scooter with `year`, `color`, and `model` properties
// + Driver with `name`, `age`, and `experience` properties
// + PickupLocation with `address` and `city` properties
