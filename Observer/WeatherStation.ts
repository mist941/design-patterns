import {AirportObserver, IObserver, RoadServicesObserver, SchoolObserver} from "./Observer";

export interface IWeatherStation {
  observers: IObserver[];

  addObserver(observer: IObserver): IWeatherStation;

  handleStorm(level: number): void;
}

export class WeatherStation implements IWeatherStation {
  observers: IObserver[] = [];

  addObserver(observer: IObserver) {
    this.observers.push(observer);
    return this;
  }

  handleStorm(level: number): void {
    this.observers.forEach(observer => {
      if (
        (observer instanceof RoadServicesObserver && level === 1) ||
        (observer instanceof SchoolObserver && level === 2) ||
        (observer instanceof AirportObserver && level === 3)
      ) {
        observer.notify();
      }
    });
  }
}