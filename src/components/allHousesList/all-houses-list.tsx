import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite';
import defaultStore from '../../stores/defaultStore';
import { Grid } from "@mui/material";
import { PagePagination } from '../pagination/pagination';
import { HouseCard } from '../house-card/house-card';
import { THouse } from '../../utils/types';
import { getPage } from '../../utils/api';

export const AllHousesList = observer(() => {
  const { housesListCurrentPage: housesList, housesData } = defaultStore;

  useEffect(() => {
    getPage(housesList)
      .then((res) => defaultStore.setHousesData(res.data))
      .catch(err => console.log(err))
  }, [housesList]);

  const getPagination = () => {
    return (
      <PagePagination pageQty={defaultStore.allHousesTotalPages} pageNumber={defaultStore.housesListCurrentPage} setPageNumber={defaultStore.setMainCurrentPage} />
    );
  }

  const getHouseCard = (house: THouse) => {
    return (
      <Grid item xs={2} sm={4} md={4} key={house.name}>
        <HouseCard houseData={house} key={house.name+'card'} />
      </Grid>
    );
  }

  return (
    <>
      {getPagination()}

      <Grid container alignItems="stretch" spacing={{ xs: 2, md: 2 }} columns={{ xs: 2, sm: 8, md: 12 }} sx={{ mb: 4 }}>
        {housesData.length > 0 ? 
        housesData.map((house: THouse, index: number) => getHouseCard(house)) 
        : 
        'Couldn`t download data about Houses. Probably something is wrong with the API server (or white walkers destroyed everything). You may try to reload this page or come back later'}
      </Grid>

      {getPagination()}
    </>
  )
});