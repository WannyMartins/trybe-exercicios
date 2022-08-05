

export default class Data {
  private _day: number;
  private _month: number;
  private _year: number;

  constructor(day: number, month: number, year: number) {

    // verifica se a data é válida
    if (!Data.validateDate(day, month, year)) {
      this._day = 1;
      this._month = 1;
      this._year = 1900;
    } else {
      this._day = day;
      this._month = month;
      this._year = year;
    }
  }

  get day(): number {
    return this._day;
  }

  set day(value: number) {
    this._day = value;
  }

  get month(): number {
    return this._month;
  }

  set month(value: number) {
    this._month = value;
  }

  get year(): number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
  }

  getMonthName(): string {
    const months = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro',
    ];
    return months[this.month-1];
  }

  isLeapYear(): boolean{
    return this._year % 4 === 0
  }

  compare(date: Data): number {
    const currentDateStr = `${this.year}-${date.month}-${this.day}`;

    const dateStr = `${date.year}-${date.month}-${date.day}`;

    if (new Date(currentDateStr) > new Date(dateStr)) return 1;
    if (new Date(currentDateStr) < new Date(dateStr)) return -1;

    return 0;

  }


  format(formatting: string): string {
    const conditions: boolean[] = [
      (!formatting.match(/a{2,4}/g)),
      (!formatting.match(/m{2}/g) && !formatting.match(/M{1}/g)),
      (!formatting.match(/d{2}/g)),
    ];

    if(conditions.every((cond) => cond)){
      throw new Error(`O formato passado é inválido ${formatting}`);
    }

    const day = this.day > 9? this.day.toString(): `0${this.day.toString()}`;
    const month = this.month > 9
    ?this.month.toString()
    : `0${this.month.toString()}`;

    const year = this.year.toString();

    const dateFormatting = formatting
      .replace('dd', day).replace('mm', month).replace('M', this.getMonthName()).replace('aaaa', year).replace('aa', year.substring(-2));

      return dateFormatting;
  }

  private static validateDate(day: number, month: number, year: number): boolean {
    const dateStr = `${year}-${month}-${day}`;

    if (new Date(dateStr).getDate() !== day) return false;

    return true;

  }
}

// Para testar!

// const testDate = new Data(29, 1, 1989);

// console.log(testDate);