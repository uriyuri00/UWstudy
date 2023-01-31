// TODO: Import the parent class
const Vehicle = require('./vehicle');
// TODO: Create a `Car` class that extends the `Vehicle` class
class Car extends Vehicle {
  constructor( id, color, passengers) {
    super(id, 4, 'beep') // constructor(id, numberOfWheels, sound) {
    this.color = color; // Vehicle 에는 색과 승객이 없다. 그래서 선언해주기.
    this.passengers = passengers;
  }

  useHorn(){
    console.log(this.sound);
  }

  checkPassengers(){
    if (this.passengers.length > 4) {
      console.log("This car only seats 4 people. You have too many passengers!"
      );
    } else {
        console.log(`you have room for ${4- this.passengers.length} people.`);
      }
    }
  }

const carPassengers = [
  'Aristotle',
  'Confucius',
  'Socrates',
  'Lao-Tzu',
  'Plato',
];

const car = new Car(15, 'blue', carPassengers);

console.log('---CAR---');
car.printInfo();
car.useHorn();
car.checkPassengers();
