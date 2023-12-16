import Movie from "../Movie";
import Cart from "../Cart";

test('add new position', () => {
  const myCart = new Cart();
  const newMovie = new Movie(
    'Мстители',
    2012,
    'USA',
    'Avengers Assemble!',
    'фантастика',
    '137 мин'
  );

  myCart.add(newMovie);

  expect(myCart.list[0]).toEqual(newMovie);

})