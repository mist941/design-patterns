import {Essentials, UnitTypes} from './types';

export class UnitEssentials {
  texture: Essentials.TEXTURE;
  sound: Essentials.SOUND;
  unitType: UnitTypes;

  constructor(texture: Essentials.TEXTURE, sound: Essentials.SOUND, unitType: UnitTypes) {
    this.texture = texture;
    this.sound = sound;
    this.unitType = unitType;
  }
}

export class UnitEssentialsFactory {
  static preparedEssentials: UnitEssentials[] = [];

  static getUnitEssentials(texture: Essentials.TEXTURE, sound: Essentials.SOUND, unitType: UnitTypes): UnitEssentials {
    const essentials = this.preparedEssentials.filter(e => e.unitType === unitType)[0];

    if (essentials) return essentials;
    else {
      const newEssentials = new UnitEssentials(texture, sound, unitType);
      this.preparedEssentials.push(newEssentials);
      return newEssentials;
    }
  }
}