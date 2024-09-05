export interface IObserver {
  notify(): void;
}

export class RoadServicesObserver implements IObserver {
  notify() {
    console.log("The road services was informed");
  }
}

export class AirportObserver implements IObserver {
  notify() {
    console.log("The airport was informed");
  }
}

export class SchoolObserver implements IObserver {
  notify() {
    console.log("The school was informed");
  }
}