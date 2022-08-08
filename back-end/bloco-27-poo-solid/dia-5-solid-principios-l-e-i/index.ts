// ./index.ts
import AirPlane from './Airplane';
import CepService from './CepService';
import FuturisticCar from './FuturisticCar';
import MockCepApi from './MockCepApi';
import PadraoCar from './PadraoCar';

async function main() {
  const cepSvc = new CepService(new MockCepApi());

  console.log(
    'get address by cep', 
    '->', 
    await cepSvc.addressByCep('xx.xxx-xx', 10),
  );
  console.log(
    'get cep by address', 
    '->', 
    await cepSvc.cepByAddress('street foo, between bar and baz', 10),
  );
}

const car = new PadraoCar
const car2 = new FuturisticCar
const car3 = new AirPlane



console.log(car.drive())
console.log(car2.drive(), car2.fly())
console.log(car3.fly())


main();