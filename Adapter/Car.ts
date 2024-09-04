interface ICar {
  nazva: string;

  zminytyNazvu(nazva: string): void;

  yuhaty(): void;

  zupynyty(): void;
}

export class Car implements ICar {
  nazva: string;

  constructor(nazva: string) {
    this.nazva = nazva;
  }

  zminytyNazvu(nazva: string) {
    this.nazva = nazva;
  }

  yuhaty() {
    console.log("Їду");
  }

  zupynyty() {
    console.log("Зупиняюсь");
  }
}