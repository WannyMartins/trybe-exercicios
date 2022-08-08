import { ICar } from './interfaces/ICar';

export default class Car implements ICar {
  drive(): void {
    console.log('Drive a car');
  }

}