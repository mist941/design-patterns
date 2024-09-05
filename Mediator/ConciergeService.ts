import {IMediator} from "./Mediator";

export interface IConciergeService {
  mediator: IMediator;

  callATaxi(): void;

  makingAHouseCall(): void;

  flowerDelivery(): void;
}

export class ConciergeService implements IConciergeService {
  mediator: IMediator;

  constructor(mediator: IMediator) {
    this.mediator = mediator;
  }

  callATaxi(): void {
    this.mediator.notify("Taxi");
  }

  flowerDelivery(): void {
    this.mediator.notify("Flower delivery");
  }

  makingAHouseCall(): void {
    this.mediator.notify("Making a house");
  }
}