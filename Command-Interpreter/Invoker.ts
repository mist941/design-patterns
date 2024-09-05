import {Command} from "./Command";
import {PizzaReceiver} from "./Receiver";

export class Invoker {
  private undoList: Command[] = [];
  private redoList: Command[] = [];
  private readonly receiver: PizzaReceiver;

  constructor(receiver: PizzaReceiver) {
    this.receiver = receiver;
  }

  add(command: Command): void {
    this.redoList.push(command);
  }

  redo(): void {
    if (!this.redoList.length) return;
    this.undoList.push(this.redoList[this.redoList.length - 1]);
    this.redoList.pop();

  }

  undo(): void {
    if (!this.undoList.length) return;
    this.redoList.push(this.undoList[this.undoList.length - 1])
    this.undoList.pop();
  }

  do(): void {
    this.redoList.forEach(r => {
      r.execute(this.receiver);
    });
  }
}