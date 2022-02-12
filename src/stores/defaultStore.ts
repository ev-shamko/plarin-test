import { observable, makeObservable, makeAutoObservable } from 'mobx';
import { THouse } from '../utils/types';

class DefaultStore {
  link: string = 'https://docs.google.com/document/d/14_55LI1XVgVLXfKQLc6Ihd8URR019B8IeFmSvApWjPQ/edit?usp=sharing';
  housesData: [] | Array<THouse> = []; // данные для страницы на 12 домов
  featuredHouses = [];

  constructor() {
    makeAutoObservable(this);
  }

  setHousesData(houses: [] | Array<THouse>) {
    this.housesData = [...houses];
  }
}

export default new DefaultStore();
 