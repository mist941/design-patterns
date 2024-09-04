export class Singleton {
  private static instances: Singleton[] = [];

  private constructor() {
  }

  public static createInstance(): void {
    if (Singleton.instances.length < 10) {
      Singleton.instances.push(new Singleton())
    }
  }

  public static getInstance(): Singleton | undefined {
    return Singleton.instances.at(-1);
  }
}