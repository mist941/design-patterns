import {Car} from "./Car";
import {CarAdapter} from "./CarAdapter";

const car = new CarAdapter(new Car("Audi RS4"));

car.changeName("Audi RS8");

console.log(car.getName());