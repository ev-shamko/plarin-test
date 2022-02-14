import { makeAutoObservable } from 'mobx';
import { THouse } from '../utils/types';
import { getFavouriteHousesFromLS, setFavouriteHousesInLS, isHouseFavourite } from '../utils/localStorage';

class DefaultStore {
  mainHousesList: [] | Array<THouse> = [];
  mainCurrentPageNumber: number = 1;
  mainTotalPages: number = 37; // здесь захардкодено максимальное количество страниц (444 дома в бд, на странице отображается по 12 домов)
  setMainCurrentPage = this._setMainCurrentPage.bind(this);

  faveHousesList: Array<THouse> = [];

  constructor() {
    makeAutoObservable(this);
  }

  // ***** Методы для главной страницы с домами

  setHousesData(houses: [] | Array<THouse>) {
    this.mainHousesList = [...houses];
  }

  _setMainCurrentPage(pageNumber: number) {
    console.log('setting current page')
    this.mainCurrentPageNumber = pageNumber;
  }

  // ***** Методы для страницы с избранными домами

  parseFaveHousesInStore(housesList: Array<THouse>) {
    this.faveHousesList = housesList;
  }

  initialParseFaveHousesInStore() {
    this.parseFaveHousesInStore(getFavouriteHousesFromLS());
  }

  toggleFaveHouse(targetHouseData: THouse) {

    // проверяем, есть ли этот дом уже в избранном. Если есть, удаляем его оттуда
    if (isHouseFavourite(targetHouseData, this.faveHousesList)) {
      this.faveHousesList = this.faveHousesList.filter((house) => house.name !== targetHouseData.name);

      // также обновляем массив с избранным в localStorage
      setFavouriteHousesInLS(this.faveHousesList);
      return console.log('This House was alredy in favourites. Have removed it from faves');
    }

    console.log('Gonna add new House in faves');
    this.faveHousesList.push(targetHouseData);

    // также обновляем массив с избранным в localStorage
    setFavouriteHousesInLS(this.faveHousesList);
  }
}

export default new DefaultStore();
