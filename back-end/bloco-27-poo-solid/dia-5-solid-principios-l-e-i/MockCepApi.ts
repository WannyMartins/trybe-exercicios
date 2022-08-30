import ICepAPI from "./interfaces/ICepAPI";

export default class MockCepApi implements ICepAPI{
  async getAddressByCEP(cep: string, num: number): Promise<string> {
      return `mock de endereços para "cep: ${cep}, n.: ${num}" é "mock Address"`;
  }

  async getCepByAddress(address: string, num: number): Promise<string> {
    return `mock de endereços para " ${address}, n.: ${num}" é "mock cep"`;
 
  }
}