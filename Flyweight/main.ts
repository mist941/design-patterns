import {Army, Cavalry, Infantry} from './Unit';

const army = new Army("1 army")
  .add(new Infantry("1 Infantry of 1 army"))
  .add(new Infantry("2 Infantry of 1 army"))
  .add(new Infantry("3 Infantry of 1 army"))
  .add(new Cavalry("1 Cavalry of 1 army"))
  .add(new Cavalry("2 Cavalry of 1 army"));

army.move(15, 25);

console.log(army);