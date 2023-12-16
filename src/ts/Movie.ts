export default class Movie {
  readonly title: string;
  readonly year: number;
  readonly country: string;
  readonly slogan: string;
  readonly genre: string;
  readonly time: string;

  constructor (title: string, year: number, country: string, slogan: string, genre: string, time: string) {
    this.title = title;
    this.year = year;
    this.country = country;
    this.slogan = slogan;
    this.genre = genre;
    this.time = time;
  }
}