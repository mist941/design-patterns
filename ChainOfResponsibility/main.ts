import {CallService} from './CallService';
import {FireFightersHandler, MedicalAssistanceHandler, PoliceHandler} from './CallHandler';
import {Structures} from './types';

const callService: CallService = new CallService(new FireFightersHandler(new MedicalAssistanceHandler(new PoliceHandler())));

console.log(callService.call(Structures.POLICE));
