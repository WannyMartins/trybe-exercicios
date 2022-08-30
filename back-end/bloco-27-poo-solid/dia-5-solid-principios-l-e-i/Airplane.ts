import { IAirPlane } from './interfaces/ICar';

export default class AirPlane implements IAirPlane {

  fly(): void {
    console.log('Fly a airplane');
  }
}