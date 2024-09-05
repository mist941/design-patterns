import {Structures} from './types';
import {CallHandler} from './CallHandler';

export class CallService {
  handler: CallHandler;

  constructor(handler: CallHandler) {
    this.handler = handler;
  };

  call(structure: Structures) {
    return this.handler.call(structure)
  }
}
