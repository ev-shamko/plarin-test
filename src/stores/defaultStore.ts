import { observable, makeObservable, makeAutoObservable } from 'mobx';
import { THouse } from '../utils/types';

class DefaultStore {
  housesData: [] | Array<THouse> = []; // данные для страницы на 12 домов
  housesListCurrentPage: number = 1;
  allHousesTotalPages: number = 37; // здесь захардкодено максимальное количество страниц (444 дома в бд, на странице отображается по 12 домов)
  setMainCurrentPage = this._setMainCurrentPage.bind(this);

  featuredHouses = [];

  constructor() {
    makeAutoObservable(this);
  }

  setHousesData(houses: [] | Array<THouse>) {
    this.housesData = [...houses];
  }

  _setMainCurrentPage(pageNumber: number) {
    console.log('setting current page')
    this.housesListCurrentPage = pageNumber;
  }
}

export default new DefaultStore();
