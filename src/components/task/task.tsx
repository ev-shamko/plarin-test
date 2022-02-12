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
  const [pageQty] = useState(37); // здесь захардкодено максимальное количество страниц (444 дома в бд, на странице отображается по 12 домов)
  const [houses, setHouses] = useState<any>([]);

  useEffect(() => {
    getPage(pageNumber)
      .then((res) => setHouses(res.data))
      .catch(err => console.log(err))
  }, [pageNumber]);

  return (
    <div className="task">
      <a href={link} target="_blank" rel="noreferrer">
        Задание
      </a>
      <ul>
        {houses.length > 0 && houses.map((house: any, index: number) => (<li key={index}>{house.name}</li>))}
      </ul>

      <Pagination
        count={pageQty}
        page={pageNumber}
        onChange={(_, num) => setPageNumber(num)}
      />
    </div>
  );
};
