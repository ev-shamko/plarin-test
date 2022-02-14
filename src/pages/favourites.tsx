import React, { useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import defaultStore from '../stores/defaultStore';
import { CardsContainer } from '../components/cards-container/cards-container';

export const FavouritesPage = observer(() => {

  const { faveHousesList: housesList } = defaultStore;

  const messageWhyEmty = useMemo(() => {
    return (<p style={{ margin: 'auto' }}>Seems like you haven`t add to favourites any Houses. You may come back to the List of all Houses and press star buttons to fave houses. <br /> Also keep in mind that if you visit this app throgh another device or another browser, you won`t be able to see your favourites, because they were saved in LocalStore in the browser.</p>);
  }, []);

  return (
    <>
      <CardsContainer housesList={housesList} messageWhyEmty={messageWhyEmty} />
    </>
  )
});