import Movie from "./Movie";

export default class Cart {
  private _list: Movie[] = []
  
  add(item: Movie): void {
    this.list.push(item);
  }

  get list() {
    return this._list;
  }
}