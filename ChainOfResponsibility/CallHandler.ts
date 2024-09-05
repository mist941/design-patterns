import {Structures} from './types';

export abstract class CallHandler {
  nextHandler: CallHandler | undefined;

  constructor(nextHandler?: CallHandler) {
    this.nextHandler = nextHandler;
  }

  abstract call(structure: Structures): string | undefined;
}

export class FireFightersHandler extends CallHandler {

  call(structure: Structures) {
    if (structure === Structures.FIREFIGHTERS) return "Firefighters are coming to you";
    if (this.nextHandler) return this.nextHandler.call(structure);
    return;
  }
}

export class PoliceHandler extends CallHandler {
  call(structure: Structures) {
    if (structure === Structures.POLICE) return "Police is coming to you";
    if (this.nextHandler) return this.nextHandler.call(structure);
    return;
  }
}

export class MedicalAssistanceHandler extends CallHandler {
  call(structure: Structures) {
    if (structure === Structures.MEDICAL_ASSISTANCE) return "Medical assistance is coming to you";
    if (this.nextHandler) return this.nextHandler.call(structure);
    return;
  }
}
