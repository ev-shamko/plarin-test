import React, { useEffect, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import defaultStore from '../stores/defaultStore';
import { PagePagination } from '../components/pagination/pagination';
import { HouseCard } from '../components/house-card/house-card';
import { THouse } from '../utils/types';
import { CardsContainer } from '../components/cards-container/cards-container';

export const FavouritesPage = observer(() => {

  const {
    faveHousesList: housesList,
  } = defaultStore;

  useEffect(() => {
    defaultStore.parseFaveHousesInStore();
  }, []);

  const messageWhyEmty = useMemo(() => {
    return 'Seems like you haven`t favourite any Houses. You may come back to the List of all Houses and press star buttons to fave houses';
  }, []);

  return (
    <>
      Your favourite Houses
      <CardsContainer housesList={housesList} messageWhyEmty={messageWhyEmty}></CardsContainer>
    </>
  )
});