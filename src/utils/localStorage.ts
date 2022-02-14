import { THouse } from './types';

// проверяет, есть ли данный дом в массиве избранных домов. Возвращает true/false
export const isHouseFavourite = (house: THouse, favourites: Array<THouse>): boolean => {
  const res = favourites.find((favHouse) => favHouse.name === house.name);
  // console.log('Checked if this house is in Favs. Res: ', !!res)
  return !!res;
}


// записывает в localStorage новый массив с объектами домов
export const setFavouriteHousesInLS = (newListOfHouses: Array<THouse>) => {
  localStorage.setItem('favouriteHouses', JSON.stringify(newListOfHouses));
}

// достаёт из localStorage строку и парсит её в массив объектов
export const getFavouriteHousesFromLS = () => {
  const favouritesFromLocalStorage: string | null = localStorage.getItem('favouriteHouses');
  let parsedFavourites: Array<THouse>;

  if (favouritesFromLocalStorage === null) {
    // обработка исключения: если в localStorage по такому ключу ничего не лежит, начнём работать с пустым массивом
    parsedFavourites = [];
  } else {
    parsedFavourites = JSON.parse(favouritesFromLocalStorage);
  }

  return parsedFavourites;
}