import {Singleton} from "./Singleton";

Singleton.createInstance();
Singleton.createInstance();
Singleton.createInstance();
Singleton.createInstance();
Singleton.createInstance();
Singleton.createInstance();

const instance: Singleton | undefined = Singleton.getInstance();

console.log(instance);