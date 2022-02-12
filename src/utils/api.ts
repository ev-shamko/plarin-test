import axios from "axios";
export const BASE_URL = 'https://anapioficeandfire.com/api';

// по условию задания на странице находится по 12 домов
export const getPageUrl = (pageNumber: number) => {
  return BASE_URL + `/houses?page=${pageNumber}&pageSize=12`;
}

export const getPage = (pageNumber: number) => {
  return axios.get(getPageUrl(pageNumber))
}