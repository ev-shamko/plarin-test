import { THouse } from './types';

// проверяет, есть ли данный дом в массиве избранных домов. Возвращает true/false
export const isHouseFavourite = (house: THouse, favourites: Array<THouse>): boolean => {
  const res = favourites.find((favHouse) => favHouse.name === house.name);
  // console.log('Checked if this house is in Favs. Res: ', !!res)
  return !!res;
}

// достаёт из localStorage строку и парсит её в массив объектов
export const getFavouriteHouses = () => {
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


export const setFavouriteHouses = (newListOfHouses: Array<THouse>) => {
  localStorage.setItem('favouriteHouses', JSON.stringify(newListOfHouses));
}

// **********************************************************

export const removeHouseFromFavs = (excludedHouse: THouse) => {
  const parsedFavourites: Array<THouse> = getFavouriteHouses();

  // проверяем, есть ли этот дом уже в избранном
  if (isHouseFavourite(excludedHouse, parsedFavourites)) {
    const newFavs = parsedFavourites.filter((house) => house.name !== excludedHouse.name);
    console.log('newFavs', newFavs)
    return setFavouriteHouses(newFavs);
  }

  return console.log('This house wasn`t in favourites, so can`t remove it from favourites')
}

export const setNewFavouriteHouse = (houseData: THouse) => {
  const parsedFavourites: Array<THouse> = getFavouriteHouses();

  // проверяем, есть ли этот дом уже в избранном
  if (isHouseFavourite(houseData, parsedFavourites)) {
    return console.log('This house is alredy in favourites')
  }

  // добавляем в массив новый объект с информацией о доме
  parsedFavourites.push(houseData);
  setFavouriteHouses(parsedFavourites);
  return console.log('New House was added in Favourites: ', parsedFavourites);

}
