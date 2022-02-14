import React, { FC } from 'react';
import { Grid } from "@mui/material";
import { THouse } from '../../utils/types';
import { HouseCard } from '../house-card/house-card';


type TCardsContainerProps = {
  housesList: Array<THouse>,
  messageWhyEmty: string,
}

export const CardsContainer = ({ housesList, messageWhyEmty }: TCardsContainerProps) => {

  const getHouseCard = (house: THouse) => {
    return (
      <Grid item xs={2} sm={4} md={4} key={house.name}>
        <HouseCard houseData={house} key={house.name + 'card'} />
      </Grid>
    );
  }

  const getCardsList = () => {

    if (housesList.length > 0) {
      return (
        <Grid
          container
          alignItems="stretch"
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
          sx={{ mb: 4 }}>

          {housesList.map((house: THouse, index: number) => getHouseCard(house))}

        </Grid>
      )
    }

    // если массив домов пустой, на странице отобразится это сообщение
    return messageWhyEmty;
  }

  return (
    <>
      {getCardsList()}
    </>
  )
}