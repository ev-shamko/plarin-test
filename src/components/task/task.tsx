import React, { useEffect, useState } from 'react';
import './task.scss';
import defaultStore from '../../stores/defaultStore';
import { getPage } from '../../utils/api';
import { observer } from 'mobx-react-lite';
import { Pagination, Grid } from "@mui/material";
import { HouseCard } from './house-card/house-card';
import { THouse } from '../../utils/types';

export const Task = observer(() => {
  const { link } = defaultStore;
  const [pageNumber, setPageNumber] = useState(1);
  const [pageQty] = useState(37); // здесь захардкодено максимальное количество страниц (444 дома в бд, на странице отображается по 12 домов)
  // const [houses, setHouses] = useState<any>([]);

  useEffect(() => {
    getPage(pageNumber)
      .then((res) => defaultStore.setHousesData(res.data))
      .catch(err => console.log(err))
  }, [pageNumber]);

  return (
    <div className="task">
      <h1>Houses of Ice and Fire</h1>

      <Pagination
        count={pageQty}
        page={pageNumber}
        onChange={(_, num) => setPageNumber(num)}
        sx={{ mb: 8, }}
      />

      <a href={link} target="_blank" rel="noreferrer">
        Задание
      </a>
      {/* <ul>
        {defaultStore.housesData.length > 0 && defaultStore.housesData.map((house: THouse, index: number) => (<HouseCard houseData={house} key={index} />))}
      </ul> */}

      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 2, sm: 8, md: 12 }} sx={{ mb: 8, mt: 8 }}>
        {defaultStore.housesData.length > 0 && defaultStore.housesData.map((house: THouse, index: number) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <HouseCard houseData={house} key={index} />
          </Grid>
        ))}
      </Grid>

      <Pagination
        count={pageQty}
        page={pageNumber}
        onChange={(_, num) => setPageNumber(num)}
        sx={{ mb: 8, }}
      />

    </div>
  );
});