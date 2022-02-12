import React, { useEffect, useState } from 'react';
import './task.scss';
import defaultStore from '../../stores/defaultStore';
import { getPage } from '../../utils/api';
import {
  Pagination,
  TextField,
  Stack,
  Link
} from "@mui/material";

export const Task = () => {
  const { link } = defaultStore;
  const [pageNumber, setPageNumber] = useState(1);
  const [pageQty] = useState(37); // Захардкодено максимальное количество страниц (444 дома в базе, на странице по 12 домов)
  const [houses, setHouses] = useState<any>([]);

  // запрос за текущей страницей домов
  useEffect(() => {
    getPage(pageNumber)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setHouses(res);
      })
      .catch(err => console.log(err))

  }, [pageNumber]);

  const getNextPage = () => {
    setPageNumber(pageNumber + 1);
  }

  return (
    <div className="task">
      <a href={link} target="_blank" rel="noreferrer">
        Задание
      </a>
      <ul>
        {houses.length > 0 && houses.map((house: any, index: number) => (<li key={index}>{house.name}</li>))}
      </ul>
      <span onClick={getNextPage} className="nextPage">Next page</span>

      <Pagination
        count={pageQty}
        page={pageNumber}
        onChange={(_, num) => setPageNumber(num)}
      />
    </div>
  );
};
