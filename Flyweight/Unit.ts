import {Essentials, UnitTypes} from './types';
import {UnitEssentials, UnitEssentialsFactory} from './UnitEssentials';

export abstract class UnitItem {
  name: string;
  type: UnitTypes;
  essentials: UnitEssentials;
  x: number;
  y: number;

  protected constructor(name: string, type: UnitTypes) {
    this.essentials = UnitEssentialsFactory.getUnitEssentials(Essentials.TEXTURE, Essentials.SOUND, type);
    this.name = name;
    this.type = type;
    this.x = 0;
    this.y = 0;
  }

  move(x: number, y: number): void {
    this.x = x;
    this.y = y;
  };
}

export class Infantry extends UnitItem {
  constructor(name: string) {
    super(name, UnitTypes.INFANTRY);
  }
}

export class Cavalry extends UnitItem {
  constructor(name: string) {
    super(name, UnitTypes.CAVALRY);
  }
}

export class Army extends UnitItem {
  private children: UnitItem[] = [];

  constructor(name: string) {
    super(name, UnitTypes.ARMY);
  }

  add(child: UnitItem): Army {
    this.children.push(child);
    return this;
  }

  move(x: number, y: number) {
    super.move(x, y);
    this.children.forEach(child => {
      child.move(x, y);
    });
  }
}