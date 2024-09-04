import {Car} from "./Car";

const car = new Car("A 5618", "black", 500, 100,);

const track = car.cloneTruck();
const minivan = car.cloneMinivan();

track.setColor("blue");
minivan.setNumber("M 1290");

console.log(track);
console.log(minivan);
