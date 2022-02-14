import { makeAutoObservable } from 'mobx';
import { THouse } from '../utils/types';
import { getFavouriteHouses, setFavouriteHouses, setNewFavouriteHouse, removeHouseFromFavs } from '../utils/localStorage';

class DefaultStore {
  mainHousesList: [] | Array<THouse> = []; // данные для страницы на 12 домов
  mainCurrentPageNumber: number = 1;
  mainTotalPages: number = 37; // здесь захардкодено максимальное количество страниц (444 дома в бд, на странице отображается по 12 домов)
  setMainCurrentPage = this._setMainCurrentPage.bind(this);

  faveHousesList: Array<THouse> = [];

  // ///////////////////////////////////////

  constructor() {
    makeAutoObservable(this);
  }

  setHousesData(houses: [] | Array<THouse>) {
    this.mainHousesList = [...houses];
  }

  _setMainCurrentPage(pageNumber: number) {
    console.log('setting current page')
    this.mainCurrentPageNumber = pageNumber;
  }

  // ///////////////////////////////////////

  parseFaveHousesInStore() {
    this.faveHousesList = getFavouriteHouses();
  }


}

export default new DefaultStore();
