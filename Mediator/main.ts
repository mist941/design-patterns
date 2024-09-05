import {User} from "./User";
import {Mediator} from "./Mediator";
import {ConciergeService} from "./ConciergeService";

const user = new User("New York", "Sam");
const mediator = new Mediator(user);
const services = new ConciergeService(mediator);

services.callATaxi();